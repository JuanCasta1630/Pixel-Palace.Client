/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AuthModal from "../AuthModal";
import { Input, Drawer } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  MenuOutlined,
  CloseCircleOutlined,
  BulbFilled,
  BulbOutlined
} from "@ant-design/icons";

const HeaderLayout = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileUserOpen, setMobileUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    // Verificar si el usuario está registrado en el localStorage
    const userRegistered = localStorage.getItem("userRegistered");
    if (userRegistered === "true") {
      setUserLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    // Verificar si el usuario está registrado en el localStorage
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn === "true") {
      setUserLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Cuando el usuario cierra sesión, borra la información del localStorage
    localStorage.removeItem("userRegistered");
    setUserLoggedIn(false);
  };
  const openLoginModal = () => {
    setLoginModalOpen(true);
    if (isMobileUserOpen) {
      toggleMobileUser();
    }
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    if (isMobileUserOpen) {
      toggleMobileUser();
    }
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleMobileUser = () => {
    setMobileUserOpen(!isMobileUserOpen);
  };

  const handleSearch = () => {
    console.log("Buscar:", searchQuery);
  };

  return (
    <div className="bg-green-600 border-4 border-green-800 p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <nav className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <MenuOutlined className="text-3xl" />
        </button>
        {isMobileMenuOpen && (
          <Drawer
            className="bg-white absolute top-16 p-4 rounded shadow-md"
            placement="left"
            closable={true}
            onClose={toggleMobileMenu}
            open={isMobileMenuOpen}
            closeIcon={
              <CloseCircleOutlined className="text-green-600 text-3xl" />
            }
          >
            <ul className="space-y-2">
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2</a>
              </li>
              <li>
                <a href="#">Opción 3</a>
              </li>
              <li>
                <a href="#">Opción 4</a>
              </li>
            </ul>
          </Drawer>
        )}
      </nav>

      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-2 flex items-center bg-white"
        />
        <h1 className="text-white text-xl font-bold hidden sm:block">Mejor si es posible</h1>
      </div>

      <div className="lg:hidden flex items-center space-x-4">
        <Drawer
          className="bg-white absolute top-16 p-4 rounded shadow-md"
          placement="right"
          closable={true}
          onClose={toggleMobileUser}
          open={isMobileUserOpen}
          closeIcon={<CloseCircleOutlined className="text-green-600 text-3xl" />}
        >
          <ul className="space-y-2">
            <li>
              <Input
                type="text"
                placeholder="Buscar"
                className="border border-green-500 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                addonBefore={
                  <SearchOutlined className="text-green-600 text-3xl" />
                }
                onPressEnter={handleSearch}
              />
            </li>
            {isUserLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-green-600 border rounded border-primary p-2 w-full"
                >
                  Salir
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={openLoginModal}
                    className="text-green-600 border rounded border-primary p-2 w-full"
                  >
                    Entrar
                  </button>
                </li>
                <li>
                  <button
                    onClick={openRegisterModal}
                    className="text-white bg-green-600 rounded p-2 w-full"
                  >
                    Registrarse
                  </button>
                </li>
              </>
            )}
          </ul>
        </Drawer>
        <button onClick={toggleMobileUser} className="text-white">
          <UserOutlined className="text-3xl" />
        </button>
      </div>
      

      <div className="lg:flex hidden items-center space-x-4">
        <Input
          type="text"
          placeholder="Buscar"
          className="border border-gray-300 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          addonBefore={<SearchOutlined className="text-white text-3xl" />}
          onPressEnter={handleSearch}
        />
        {isUserLoggedIn ? (
          <>
            <img
              src="/nallis.jpeg"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <button onClick={handleLogout} className="text-white">
              Salir
            </button>
          </>
        ) : (
          <>
            <button onClick={openLoginModal} className="text-white">
              Entrar
            </button>
            <span className="text-white">|</span>
            <button onClick={openRegisterModal} className="text-white">
              Registrarse
            </button>
          </>
        )}
      </div>

      <AuthModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        initialTab={0}
      />
      <AuthModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        initialTab={1}
      />
    </div>
  );
};

export default HeaderLayout;
