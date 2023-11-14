"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/services/firebase.js":
/*!**************************************!*\
  !*** ./src/app/services/firebase.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGame: function() { return /* binding */ createGame; },\n/* harmony export */   deleteGame: function() { return /* binding */ deleteGame; },\n/* harmony export */   getCards: function() { return /* binding */ getCards; },\n/* harmony export */   getGameDetails: function() { return /* binding */ getGameDetails; },\n/* harmony export */   getGames: function() { return /* binding */ getGames; },\n/* harmony export */   handleResetPassword: function() { return /* binding */ handleResetPassword; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   searchGamesByName: function() { return /* binding */ searchGamesByName; },\n/* harmony export */   signIn: function() { return /* binding */ signIn; },\n/* harmony export */   updateGame: function() { return /* binding */ updateGame; },\n/* harmony export */   uploadImageToFirebaseStorage: function() { return /* binding */ uploadImageToFirebaseStorage; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth_cordova__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth/cordova */ \"(app-pages-browser)/./node_modules/firebase/auth/cordova/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n// Importa las funciones necesarias de Firebase\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// const firebaseConfig = {\n//   apiKey: \"AIzaSyB4G-wTDBmEoVObZMEUYKR8x1_KO8hyhMo\",\n//   authDomain: \"pixel-palace-d6bff.firebaseapp.com\",\n//   projectId: \"pixel-palace-d6bff\",\n//   storageBucket: \"pixel-palace-d6bff.appspot.com\",\n//   messagingSenderId: \"273766258888\",\n//   appId: \"1:273766258888:web:81ca0568c914fbceacedfd\",\n//   measurementId: \"G-2P1CY9ZRG0\",\n// };\nconst firebaseConfig = {\n    apiKey: \"AIzaSyB-fA9kv0DVDRqragYCgii_C6Qgj-pBG1s\",\n    authDomain: \"pixel-palacebaclup.firebaseapp.com\",\n    projectId: \"pixel-palacebaclup\",\n    storageBucket: \"pixel-palacebaclup.appspot.com\",\n    messagingSenderId: \"372391412137\",\n    appId: \"1:372391412137:web:ef0490cc6f1a104b6ac4b8\"\n};\n// Inicializa Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app); // Agrega Firestore a tu instancia de Firebase\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)(app);\nconst registerUser = async (email1, password, name, lastName, userName, birthdate)=>{\n    try {\n        // Crea un usuario en Firebase Authentication\n        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, email1, password);\n        // Obtén el ID de usuario generado por Firebase Authentication\n        const userId = userCredential.user.uid;\n        // Crea un nuevo documento de usuario en la colección 'users' en Firebase Firestore\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(firestore, \"users\", userId);\n        const userData = {\n            nombre: name,\n            apellido: lastName,\n            fechaNacimiento: birthdate,\n            email: email1,\n            userName: userName\n        };\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(userDocRef, userData);\n        return {\n            success: true\n        };\n    } catch (error) {\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n};\nasync function uploadImageToFirebaseStorage(file) {\n    const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, file.name);\n    try {\n        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytes)(storageRef, file);\n        const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(storageRef);\n        return downloadURL;\n    } catch (error) {\n        console.error(\"Error al subir la imagen\", error);\n        return null;\n    }\n}\n// Función para el inicio de sesión y registro\nconst signIn = async (data, pass, createUser)=>{\n    try {\n        const method = createUser ? firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword : firebase_auth_cordova__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword;\n        const result = await method(auth, data.email, pass);\n        // Si estás creando un usuario, se configura su información aquí\n        if (createUser) {\n            // Agregar información del usuario a Firestore después de un inicio de sesión exitoso\n            const userId = result.user.uid; // Obtener el ID del usuario\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(firestore, \"users\", userId); // Referencia al documento del usuario\n            const userData = {\n                // Configura los datos del usuario que deseas almacenar\n                nombre: data.name,\n                apellido: data.lastName,\n                email: data.email,\n                fechaNacimiento: data.birthdate,\n                userName: data.username\n            };\n            // Agrega los datos del usuario a Firestore\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(userDocRef, userData);\n        }\n        return result;\n    } catch (error) {\n        console.error(\"Hubo un problema, revisa tus datos\");\n    }\n};\nconst handleResetPassword = async ()=>{\n    try {\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(); // Obtiene la instancia de autenticación de Firebase\n        await sendPasswordResetEmail(auth, email);\n        // La solicitud de restablecimiento de contraseña se envió con éxito\n        setSuccessMessage(\"Se ha enviado un correo electr\\xf3nico para restablecer tu contrase\\xf1a. Por favor, verifica tu bandeja de entrada.\");\n        setErrorMessage(\"\");\n    } catch (error) {\n        // Hubo un error al enviar la solicitud de restablecimiento de contraseña\n        setSuccessMessage(\"\");\n        setErrorMessage(\"Hubo un error al enviar la solicitud de restablecimiento de contrase\\xf1a. Verifica que el correo electr\\xf3nico sea v\\xe1lido.\");\n    }\n};\nconst useAuth = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Escucha cambios en el estado de autenticación\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (firebaseUser)=>{\n            setUser(firebaseUser);\n        });\n        // Limpia la suscripción cuando el componente se desmonta\n        return ()=>unsubscribe();\n    }, []);\n    const cerrarSesion = ()=>{\n        // Cierra la sesión del usuario\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\n    };\n    return {\n        user,\n        cerrarSesion\n    };\n};\n_s(useAuth, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\nconst createGame = async (gameData)=>{\n    console.log(gameData, \"firebase\");\n    try {\n        let collectionName = \"juegos\";\n        if (gameData.type === \"Card\") {\n            collectionName = \"tarjeta\";\n        }\n        const gameDocRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, collectionName), gameData);\n        console.log(gameDocRef.id);\n        return {\n            success: true,\n            gameId: gameDocRef.id\n        };\n    } catch (error) {\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n};\nconst updateGame = async (gameId, updatedGameData)=>{\n    try {\n        await updateDoc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(firestore, \"juegos\", gameId), updatedGameData);\n        return {\n            success: true\n        };\n    } catch (error) {\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n};\nconst getGames = async ()=>{\n    try {\n        const gamesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, \"juegos\");\n        const gamesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(gamesCollection);\n        const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(gamesQuery);\n        const games = [];\n        snapshot.forEach((doc)=>{\n            const gameData = doc.data();\n            games.push({\n                id: doc.id,\n                ...gameData\n            });\n        });\n        return {\n            success: true,\n            games\n        };\n    } catch (error) {\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n};\nconst getCards = async ()=>{\n    try {\n        const gamesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, \"tarjeta\");\n        const gamesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(gamesCollection);\n        const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(gamesQuery);\n        const card = [];\n        snapshot.forEach((doc)=>{\n            const gameData = doc.data();\n            card.push({\n                id: doc.id,\n                ...gameData\n            });\n        });\n        return {\n            success: true,\n            card\n        };\n    } catch (error) {\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n};\nconst getGameDetails = async (gameId)=>{\n    try {\n        const gameDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(firestore, \"juegos\", gameId);\n        const gameDocSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(gameDocRef);\n        if (gameDocSnapshot.exists()) {\n            // El documento del juego existe\n            return gameDocSnapshot.data();\n        } else {\n            // El documento del juego no existe\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error al obtener detalles del juego\", error);\n        return null;\n    }\n};\nconst searchGamesByName = async (searchQuery)=>{\n    try {\n        const gamesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, \"juegos\");\n        const gamesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(gamesCollection, where(\"nombre\", \">=\", searchQuery).where(\"nombre\", \"<=\", searchQuery + \"\"));\n        const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(gamesQuery);\n        console.log(gamesQuery);\n        const results = [];\n        snapshot.forEach((doc)=>{\n            const gameData = doc.data();\n            results.push({\n                id: doc.id,\n                ...gameData\n            });\n        });\n        return results;\n    } catch (error) {\n        console.error(\"Error al buscar juegos:\", error);\n        return [];\n    }\n};\nconst deleteGame = async (gameId)=>{\n    try {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(firestore, \"juegos\", gameId));\n        return {\n            success: true\n        };\n    } catch (error) {\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUErQzs7QUFDRjtBQUMyQjtBQUNMO0FBV3ZDO0FBQ0c7QUFDYTtBQUNnQjtBQUNVO0FBQ2xCO0FBRXBELDJCQUEyQjtBQUMzQix1REFBdUQ7QUFDdkQsc0RBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyxxREFBcUQ7QUFDckQsdUNBQXVDO0FBQ3ZDLHdEQUF3RDtBQUN4RCxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMLE1BQU11QixpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1Q7QUFDQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTTlCLDJEQUFhQSxDQUFDdUI7QUFDMUIsTUFBTVEsT0FBTzlCLHNEQUFPQTtBQUNwQixNQUFNK0IsWUFBWTVCLGdFQUFZQSxDQUFDMEIsTUFBTSw4Q0FBOEM7QUFDbkYsTUFBTUcsVUFBVWQsNERBQVVBLENBQUNXO0FBQ3BCLE1BQU1JLGVBQWUsT0FDMUJDLFFBQ0FDLFVBQ0FDLE1BQ0FDLFVBQ0FDLFVBQ0FDO0lBRUEsSUFBSTtRQUNGLDZDQUE2QztRQUM3QyxNQUFNQyxpQkFBaUIsTUFBTXZDLDZFQUE4QkEsQ0FDekQ2QixNQUNBSSxRQUNBQztRQUdGLDhEQUE4RDtRQUM5RCxNQUFNTSxTQUFTRCxlQUFlRSxJQUFJLENBQUNDLEdBQUc7UUFFdEMsbUZBQW1GO1FBQ25GLE1BQU1DLGFBQWF4Qyx1REFBR0EsQ0FBQzJCLFdBQVcsU0FBU1U7UUFDM0MsTUFBTUksV0FBVztZQUNmQyxRQUFRVjtZQUNSVyxVQUFVVjtZQUNWVyxpQkFBaUJUO1lBQ2pCTCxPQUFPQTtZQUNQSSxVQUFVQTtRQUNaO1FBQ0EsTUFBTWpDLDBEQUFNQSxDQUFDdUMsWUFBWUM7UUFFekIsT0FBTztZQUFFSSxT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O0lBQ1QsRUFBRSxPQUFPaEQsT0FBTztRQUNkSyxRQUFRTCxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNaUQsYUFBYSxPQUFPcEI7SUFDL0IsSUFBSTtRQUNGLE1BQU1yRSw2REFBU0EsQ0FBQ04sdURBQUdBLENBQUMyQixXQUFXLFVBQVVnRDtRQUN6QyxPQUFPO1lBQUU5QixTQUFTO1FBQUs7SUFDekIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTztZQUFFRCxTQUFTO1lBQU9DLE9BQU9BLE1BQU10QyxPQUFPO1FBQUM7SUFDaEQ7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UuanM/YTg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRhIGxhcyBmdW5jaW9uZXMgbmVjZXNhcmlhcyBkZSBGaXJlYmFzZVxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoL2NvcmRvdmFcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgZG9jLFxyXG4gIHNldERvYyxcclxuICBhZGREb2MsXHJcbiAgY29sbGVjdGlvbixcclxuICBxdWVyeSxcclxuICBnZXREb2NzLFxyXG4gIGRlbGV0ZURvYyxcclxuICBnZXREb2MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXREb3dubG9hZFVSTCwgZ2V0U3RvcmFnZSwgZ2V0VVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgcmVmLCB1cGxvYWRCeXRlcyB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG4vLyBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuLy8gICBhcGlLZXk6IFwiQUl6YVN5QjRHLXdUREJtRW9WT2JaTUVVWUtSOHgxX0tPOGh5aE1vXCIsXHJcbi8vICAgYXV0aERvbWFpbjogXCJwaXhlbC1wYWxhY2UtZDZiZmYuZmlyZWJhc2VhcHAuY29tXCIsXHJcbi8vICAgcHJvamVjdElkOiBcInBpeGVsLXBhbGFjZS1kNmJmZlwiLFxyXG4vLyAgIHN0b3JhZ2VCdWNrZXQ6IFwicGl4ZWwtcGFsYWNlLWQ2YmZmLmFwcHNwb3QuY29tXCIsXHJcbi8vICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjczNzY2MjU4ODg4XCIsXHJcbi8vICAgYXBwSWQ6IFwiMToyNzM3NjYyNTg4ODg6d2ViOjgxY2EwNTY4YzkxNGZiY2VhY2VkZmRcIixcclxuLy8gICBtZWFzdXJlbWVudElkOiBcIkctMlAxQ1k5WlJHMFwiLFxyXG4vLyB9O1xyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Qi1mQTlrdjBEVkRScXJhZ1lDZ2lpX0M2UWdqLXBCRzFzXCIsXHJcbiAgYXV0aERvbWFpbjogXCJwaXhlbC1wYWxhY2ViYWNsdXAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInBpeGVsLXBhbGFjZWJhY2x1cFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicGl4ZWwtcGFsYWNlYmFjbHVwLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzcyMzkxNDEyMTM3XCIsXHJcbiAgYXBwSWQ6IFwiMTozNzIzOTE0MTIxMzc6d2ViOmVmMDQ5MGNjNmYxYTEwNGI2YWM0YjhcIlxyXG59O1xyXG4vLyBJbmljaWFsaXphIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5jb25zdCBmaXJlc3RvcmUgPSBnZXRGaXJlc3RvcmUoYXBwKTsgLy8gQWdyZWdhIEZpcmVzdG9yZSBhIHR1IGluc3RhbmNpYSBkZSBGaXJlYmFzZVxyXG5jb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKFxyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG4gIG5hbWUsXHJcbiAgbGFzdE5hbWUsXHJcbiAgdXNlck5hbWUsXHJcbiAgYmlydGhkYXRlXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDcmVhIHVuIHVzdWFyaW8gZW4gRmlyZWJhc2UgQXV0aGVudGljYXRpb25cclxuICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICBhdXRoLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRcclxuICAgICk7XHJcblxyXG4gICAgLy8gT2J0w6luIGVsIElEIGRlIHVzdWFyaW8gZ2VuZXJhZG8gcG9yIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyQ3JlZGVudGlhbC51c2VyLnVpZDtcclxuXHJcbiAgICAvLyBDcmVhIHVuIG51ZXZvIGRvY3VtZW50byBkZSB1c3VhcmlvIGVuIGxhIGNvbGVjY2nDs24gJ3VzZXJzJyBlbiBGaXJlYmFzZSBGaXJlc3RvcmVcclxuICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZmlyZXN0b3JlLCBcInVzZXJzXCIsIHVzZXJJZCk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbm9tYnJlOiBuYW1lLFxyXG4gICAgICBhcGVsbGlkbzogbGFzdE5hbWUsXHJcbiAgICAgIGZlY2hhTmFjaW1pZW50bzogYmlydGhkYXRlLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZSxcclxuICAgIH07XHJcbiAgICBhd2FpdCBzZXREb2ModXNlckRvY1JlZiwgdXNlckRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlVG9GaXJlYmFzZVN0b3JhZ2UoZmlsZSkge1xyXG4gIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHVwbG9hZEJ5dGVzKHN0b3JhZ2VSZWYsIGZpbGUpO1xyXG4gICAgY29uc3QgZG93bmxvYWRVUkwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKTtcclxuICAgIHJldHVybiBkb3dubG9hZFVSTDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIHN1YmlyIGxhIGltYWdlblwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDsgXHJcbiAgfVxyXG59XHJcblxyXG4vLyBGdW5jacOzbiBwYXJhIGVsIGluaWNpbyBkZSBzZXNpw7NuIHkgcmVnaXN0cm9cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduSW4gPSBhc3luYyAoZGF0YSwgcGFzcywgY3JlYXRlVXNlcikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSBjcmVhdGVVc2VyXHJcbiAgICAgID8gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkXHJcbiAgICAgIDogc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQ7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZXRob2QoYXV0aCwgZGF0YS5lbWFpbCwgcGFzcyk7XHJcbiAgICAvLyBTaSBlc3TDoXMgY3JlYW5kbyB1biB1c3VhcmlvLCBzZSBjb25maWd1cmEgc3UgaW5mb3JtYWNpw7NuIGFxdcOtXHJcbiAgICBpZiAoY3JlYXRlVXNlcikge1xyXG4gICAgICAvLyBBZ3JlZ2FyIGluZm9ybWFjacOzbiBkZWwgdXN1YXJpbyBhIEZpcmVzdG9yZSBkZXNwdcOpcyBkZSB1biBpbmljaW8gZGUgc2VzacOzbiBleGl0b3NvXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IHJlc3VsdC51c2VyLnVpZDsgLy8gT2J0ZW5lciBlbCBJRCBkZWwgdXN1YXJpb1xyXG4gICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCB1c2VySWQpOyAvLyBSZWZlcmVuY2lhIGFsIGRvY3VtZW50byBkZWwgdXN1YXJpb1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgICAvLyBDb25maWd1cmEgbG9zIGRhdG9zIGRlbCB1c3VhcmlvIHF1ZSBkZXNlYXMgYWxtYWNlbmFyXHJcbiAgICAgICAgbm9tYnJlOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgYXBlbGxpZG86IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgZmVjaGFOYWNpbWllbnRvOiBkYXRhLmJpcnRoZGF0ZSxcclxuICAgICAgICB1c2VyTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEFncmVnYSBsb3MgZGF0b3MgZGVsIHVzdWFyaW8gYSBGaXJlc3RvcmVcclxuICAgICAgYXdhaXQgc2V0RG9jKHVzZXJEb2NSZWYsIHVzZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiSHVibyB1biBwcm9ibGVtYSwgcmV2aXNhIHR1cyBkYXRvc1wiKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlUmVzZXRQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTsgLy8gT2J0aWVuZSBsYSBpbnN0YW5jaWEgZGUgYXV0ZW50aWNhY2nDs24gZGUgRmlyZWJhc2VcclxuICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpO1xyXG5cclxuICAgIC8vIExhIHNvbGljaXR1ZCBkZSByZXN0YWJsZWNpbWllbnRvIGRlIGNvbnRyYXNlw7FhIHNlIGVudmnDsyBjb24gw6l4aXRvXHJcbiAgICBzZXRTdWNjZXNzTWVzc2FnZShcclxuICAgICAgXCJTZSBoYSBlbnZpYWRvIHVuIGNvcnJlbyBlbGVjdHLDs25pY28gcGFyYSByZXN0YWJsZWNlciB0dSBjb250cmFzZcOxYS4gUG9yIGZhdm9yLCB2ZXJpZmljYSB0dSBiYW5kZWphIGRlIGVudHJhZGEuXCJcclxuICAgICk7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEh1Ym8gdW4gZXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZCBkZSByZXN0YWJsZWNpbWllbnRvIGRlIGNvbnRyYXNlw7FhXHJcbiAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcclxuICAgIHNldEVycm9yTWVzc2FnZShcclxuICAgICAgXCJIdWJvIHVuIGVycm9yIGFsIGVudmlhciBsYSBzb2xpY2l0dWQgZGUgcmVzdGFibGVjaW1pZW50byBkZSBjb250cmFzZcOxYS4gVmVyaWZpY2EgcXVlIGVsIGNvcnJlbyBlbGVjdHLDs25pY28gc2VhIHbDoWxpZG8uXCJcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEVzY3VjaGEgY2FtYmlvcyBlbiBlbCBlc3RhZG8gZGUgYXV0ZW50aWNhY2nDs25cclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChmaXJlYmFzZVVzZXIpID0+IHtcclxuICAgICAgc2V0VXNlcihmaXJlYmFzZVVzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTGltcGlhIGxhIHN1c2NyaXBjacOzbiBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBkZXNtb250YVxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjZXJyYXJTZXNpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBDaWVycmEgbGEgc2VzacOzbiBkZWwgdXN1YXJpb1xyXG4gICAgc2lnbk91dChhdXRoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyB1c2VyLCBjZXJyYXJTZXNpb24gfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHYW1lID0gYXN5bmMgKGdhbWVEYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZ2FtZURhdGEsIFwiZmlyZWJhc2VcIik7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjb2xsZWN0aW9uTmFtZSA9IFwianVlZ29zXCI7IFxyXG5cclxuICAgIGlmIChnYW1lRGF0YS50eXBlID09PSBcIkNhcmRcIikge1xyXG4gICAgICBjb2xsZWN0aW9uTmFtZSA9IFwidGFyamV0YVwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2FtZURvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgY29sbGVjdGlvbk5hbWUpLCBnYW1lRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhnYW1lRG9jUmVmLmlkKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBnYW1lSWQ6IGdhbWVEb2NSZWYuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdhbWUgPSBhc3luYyAoZ2FtZUlkLCB1cGRhdGVkR2FtZURhdGEpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgdXBkYXRlRG9jKGRvYyhmaXJlc3RvcmUsIFwianVlZ29zXCIsIGdhbWVJZCksIHVwZGF0ZWRHYW1lRGF0YSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEdhbWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBnYW1lc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJqdWVnb3NcIik7XHJcbiAgICBjb25zdCBnYW1lc1F1ZXJ5ID0gcXVlcnkoZ2FtZXNDb2xsZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZ2FtZXNRdWVyeSk7XHJcbiAgICBjb25zdCBnYW1lcyA9IFtdO1xyXG5cclxuICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGdhbWVzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5nYW1lRGF0YSB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGdhbWVzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGdldENhcmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBnYW1lc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJ0YXJqZXRhXCIpO1xyXG4gICAgY29uc3QgZ2FtZXNRdWVyeSA9IHF1ZXJ5KGdhbWVzQ29sbGVjdGlvbik7XHJcblxyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGdhbWVzUXVlcnkpO1xyXG4gICAgY29uc3QgY2FyZCA9IFtdO1xyXG5cclxuICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBnYW1lRGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGNhcmQucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmdhbWVEYXRhIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2FyZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lRGV0YWlscyA9IGFzeW5jIChnYW1lSWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZ2FtZURvY1JlZiA9IGRvYyhmaXJlc3RvcmUsIFwianVlZ29zXCIsIGdhbWVJZClcclxuICAgIGNvbnN0IGdhbWVEb2NTbmFwc2hvdCA9IGF3YWl0IGdldERvYyhnYW1lRG9jUmVmKTtcclxuXHJcbiAgICBpZiAoZ2FtZURvY1NuYXBzaG90LmV4aXN0cygpKSB7XHJcbiAgICAgIC8vIEVsIGRvY3VtZW50byBkZWwganVlZ28gZXhpc3RlXHJcbiAgICAgIHJldHVybiBnYW1lRG9jU25hcHNob3QuZGF0YSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBFbCBkb2N1bWVudG8gZGVsIGp1ZWdvIG5vIGV4aXN0ZVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgZGV0YWxsZXMgZGVsIGp1ZWdvXCIsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoR2FtZXNCeU5hbWUgPSBhc3luYyAoc2VhcmNoUXVlcnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZ2FtZXNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihmaXJlc3RvcmUsIFwianVlZ29zXCIpO1xyXG4gICAgY29uc3QgZ2FtZXNRdWVyeSA9IHF1ZXJ5KGdhbWVzQ29sbGVjdGlvbiwgd2hlcmUoXCJub21icmVcIiwgXCI+PVwiLCBzZWFyY2hRdWVyeSkud2hlcmUoXCJub21icmVcIiwgXCI8PVwiLCBzZWFyY2hRdWVyeSArICdcXHVmOGZmJykpO1xyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGdhbWVzUXVlcnkpO1xyXG4gY29uc29sZS5sb2coZ2FtZXNRdWVyeSk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcblxyXG4gICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgcmVzdWx0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZ2FtZURhdGEgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgYnVzY2FyIGp1ZWdvczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUdhbWUgPSBhc3luYyAoZ2FtZUlkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRlbGV0ZURvYyhkb2MoZmlyZXN0b3JlLCBcImp1ZWdvc1wiLCBnYW1lSWQpKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0RmlyZXN0b3JlIiwiZG9jIiwic2V0RG9jIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwiZ2V0RG9jcyIsImRlbGV0ZURvYyIsImdldERvYyIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJnZXREb3dubG9hZFVSTCIsImdldFN0b3JhZ2UiLCJnZXRVUkwiLCJyZWYiLCJ1cGxvYWRCeXRlcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJyZWdpc3RlclVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwibmFtZSIsImxhc3ROYW1lIiwidXNlck5hbWUiLCJiaXJ0aGRhdGUiLCJ1c2VyQ3JlZGVudGlhbCIsInVzZXJJZCIsInVzZXIiLCJ1aWQiLCJ1c2VyRG9jUmVmIiwidXNlckRhdGEiLCJub21icmUiLCJhcGVsbGlkbyIsImZlY2hhTmFjaW1pZW50byIsInN1Y2Nlc3MiLCJlcnJvciIsInVwbG9hZEltYWdlVG9GaXJlYmFzZVN0b3JhZ2UiLCJmaWxlIiwic3RvcmFnZVJlZiIsImRvd25sb2FkVVJMIiwiY29uc29sZSIsInNpZ25JbiIsImRhdGEiLCJwYXNzIiwiY3JlYXRlVXNlciIsIm1ldGhvZCIsInJlc3VsdCIsInVzZXJuYW1lIiwiaGFuZGxlUmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZXRTdWNjZXNzTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVzZUF1dGgiLCJzZXRVc2VyIiwidW5zdWJzY3JpYmUiLCJmaXJlYmFzZVVzZXIiLCJjZXJyYXJTZXNpb24iLCJjcmVhdGVHYW1lIiwiZ2FtZURhdGEiLCJsb2ciLCJjb2xsZWN0aW9uTmFtZSIsInR5cGUiLCJnYW1lRG9jUmVmIiwiaWQiLCJnYW1lSWQiLCJ1cGRhdGVHYW1lIiwidXBkYXRlZEdhbWVEYXRhIiwidXBkYXRlRG9jIiwiZ2V0R2FtZXMiLCJnYW1lc0NvbGxlY3Rpb24iLCJnYW1lc1F1ZXJ5Iiwic25hcHNob3QiLCJnYW1lcyIsImZvckVhY2giLCJwdXNoIiwiZ2V0Q2FyZHMiLCJjYXJkIiwiZ2V0R2FtZURldGFpbHMiLCJnYW1lRG9jU25hcHNob3QiLCJleGlzdHMiLCJzZWFyY2hHYW1lc0J5TmFtZSIsInNlYXJjaFF1ZXJ5Iiwid2hlcmUiLCJyZXN1bHRzIiwiZGVsZXRlR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/services/firebase.js\n"));

/***/ })

});