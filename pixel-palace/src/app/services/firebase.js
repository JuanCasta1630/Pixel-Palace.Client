// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { message } from "antd";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4G-wTDBmEoVObZMEUYKR8x1_KO8hyhMo",
  authDomain: "pixel-palace-d6bff.firebaseapp.com",
  projectId: "pixel-palace-d6bff",
  storageBucket: "pixel-palace-d6bff.appspot.com",
  messagingSenderId: "273766258888",
  appId: "1:273766258888:web:81ca0568c914fbceacedfd",
  measurementId: "G-2P1CY9ZRG0",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app); // Agrega Firestore a tu instancia de Firebase

export const registerUser = async (
  email,
  password,
  name,
  lastName,
  userName,
  birthdate
) => {
  console.log(email, password, name, lastName, userName, birthdate);
  try {
    // Crea un usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Obtén el ID de usuario generado por Firebase Authentication
    const userId = userCredential.user.uid;

    // Crea un nuevo documento de usuario en la colección 'users' en Firebase Firestore
    const userDocRef = doc(firestore, "users", userId);
    const userData = {
      nombre: name,
      apellido: lastName,
      fechaNacimiento: birthdate,
      email: email,
      userName: userName,
    };
    console.log();
    await setDoc(userDocRef, userData);

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Función para el inicio de sesión y registro

export const signIn = async (data, pass, createUser) => {
  console.log(data);
  console.log(pass);
  console.log(createUser);
  try {
    const method = createUser
      ? createUserWithEmailAndPassword
      : signInWithEmailAndPassword;
    const result = await method(auth, data.email, pass);
    console.log(result);
    // Si estás creando un usuario, se configura su información aquí
    if (createUser) {
      // Agregar información del usuario a Firestore después de un inicio de sesión exitoso
      const userId = result.user.uid; // Obtener el ID del usuario
      const userDocRef = doc(firestore, "users", userId); // Referencia al documento del usuario
      const userData = {
        // Configura los datos del usuario que deseas almacenar
        nombre: data.name,
        apellido: data.lastName,
        email: data.email,
        fechaNacimiento: data.birthdate,
        userName: data.username,
      };

      // Agrega los datos del usuario a Firestore
      await setDoc(userDocRef, userData);
    }

    return result;
  } catch (error) {
    message.info("Hubo un problema, revisa tus datos");
  }
};

export const handleResetPassword = async () => {
  try {
    const auth = getAuth(); // Obtiene la instancia de autenticación de Firebase
    await sendPasswordResetEmail(auth, email);

    // La solicitud de restablecimiento de contraseña se envió con éxito
    setSuccessMessage(
      "Se ha enviado un correo electrónico para restablecer tu contraseña. Por favor, verifica tu bandeja de entrada."
    );
    setErrorMessage("");
  } catch (error) {
    // Hubo un error al enviar la solicitud de restablecimiento de contraseña
    setSuccessMessage("");
    setErrorMessage(
      "Hubo un error al enviar la solicitud de restablecimiento de contraseña. Verifica que el correo electrónico sea válido."
    );
  }
};

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escucha cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    // Limpia la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const cerrarSesion = () => {
    // Cierra la sesión del usuario
    signOut(auth);
  };

  return { user, cerrarSesion };
};
