/* eslint-disable @next/next/no-img-element */
import { Children, useState, useEffect } from "react";
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
import { useAuth } from "@/app/services/firebase";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes"

const HeaderLayout = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileUserOpen, setMobileUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, cerrarSesion } = useAuth(); 

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

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <div className=" bg-green-600 border-black p-4 flex items-center justify-between fixed w-full top-0 z-10 dark:bg-primary" >
      <nav className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <MenuOutlined className="text-3xl" />
        </button>
        {isMobileMenuOpen && (
          <Drawer
            className="bg-white absolute top-16 p-4 rounded shadow-md dark:bg-black"
            placement="left"
            closable={true}
            onClose={toggleMobileMenu}
            open={isMobileMenuOpen}
            closeIcon={
              <CloseCircleOutlined className="text-primary text-3xl" />
            }
          >
            <ul className="space-y-2">
              <li>
                <a href="#">Libreria</a>
              </li>
              <li>
                <a href="#">Noticias</a>
              </li>
              <li>
                <a href="#">Comunidad</a>
              </li>
              <li>
                <a href="#">Soporte</a>
              </li>
            </ul>
          </Drawer>
        )}
      </nav>

      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-2 flex items-center dark:bg-gray-700 bg-white"
        />
        <h1 className="text-white text-xl font-bold dark:text-black">Mejor si es posible</h1>
      </div>

      <div className="lg:hidden flex items-center space-x-4">
        <Drawer
          className="bg-white absolute top-16 p-4 rounded shadow-md dark:bg-black"
          placement="right"
          closable={true}
          onClose={toggleMobileUser}
          open={isMobileUserOpen}
          closeIcon={<CloseCircleOutlined className="text-primary text-3xl" />}
        >
          <ul className="space-y-2">
            <li>
              <Input
                type="text"
                placeholder="Buscar"
                className="border border-green-500 rounded "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                addonBefore={
                  <SearchOutlined className="text-green-500 text-3xl" />
                }
                onPressEnter={handleSearch}
              />
            </li>
            {user ? (
              <li>
                <button
                  onClick={cerrarSesion}
                  className="text-primary border rounded border-primary p-2 w-full"
                >
                  Salir
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={openLoginModal}
                    className="text-primary border rounded border-primary p-2 w-full"
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
        {user || !user ? (
          <button onClick={toggleMobileUser} className="text-white">
            <UserOutlined className="text-3xl" />
          </button>
        ) : null}
      </div>
      <div className="lg:flex hidden items-center space-x-4">
        <Input
          type="text"
          placeholder="Buscar"
          className="border border-gray-300 rounded dark:border-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          addonBefore={<SearchOutlined className="text-white text-3xl dark:text-black" />}
          onPressEnter={handleSearch}
        />
      <div>
      {currentTheme === 'dark' ? (
      <button
              className="bg-black-700 hover:bg-gray-300 w-12 rounded-md border-primary border-2 p-3 dark:border-green-600"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height="20" width="20" />
            </button>
          ) : (
            <button
              className="bg-black-700 w-12 rounded-md border-primary border-2 p-3 hover:bg-gray-300 dark:border-green-600"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height="20" width="20" />
            </button>
          )}
      </div>
        {user ? ( 
          <>
            <img
              src="/nallis.jpeg"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <button onClick={cerrarSesion} className="text-white">
              Salir
            </button>
          </>
        ) : (
          <>
            <button onClick={openLoginModal} className="text-white dark:text-black">
              Entrar
            </button>
            <span className="text-white">|</span>
            <button onClick={openRegisterModal} className="text-white dark:text-black">
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
    
    </ThemeProvider>
  );
};

export default HeaderLayout;
