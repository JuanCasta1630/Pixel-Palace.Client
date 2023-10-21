import { useState } from "react";
import AuthModal from "../AuthModal";

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const handleLogin = () => {
    //la lógica para iniciar sesión aquí
    setUserLoggedIn(true);
    closeLoginModal();
  };


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    //la lógica para cerrar sesión aquí
    setUserLoggedIn(false);
  };

  return (
    <header className="bg-primary p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2 flex items-center bg-white" />
        <h1 className="text-white text-xl font-bold">Mejor si es posible</h1>
      </div>
      <nav className="space-x-4">
        {isUserLoggedIn ? (
          <div className="flex items-center space-x-2">
            <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
            <button onClick={handleLogout} className="text-white border border-green-950 shadow-md rounded px-4 py-2">
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
            <button onClick={openLoginModal} className="bg-green-200 text-white border border-green-950 shadow-md rounded px-4 py-2">
              Iniciar Sesión
            </button>
            <button onClick={openRegisterModal} className="bg-green-200 text-white border border-green-950 shadow-md rounded px-4 py-2">
              Registrarse
            </button>
          </>   
        )}
      </nav>
      <AuthModal isOpen={isLoginModalOpen} onClose={closeLoginModal} initialTab={0} />
      <AuthModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} initialTab={1} />
    </header>
  );
};

export default Header;
