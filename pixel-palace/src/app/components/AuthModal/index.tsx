import React, { ReactElement, useState } from "react";
import Login from "../login";
import RegistrationForm from "../registro";
import { AuthModalProps } from "@/app/types/types";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab,
}): ReactElement => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div
      className={`fixed inset-0 flex h-screen items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>
      <div className="modal-container bg-white relative w-100 h-100">
        <div className="modal-content">
          <button
            className="absolute top-2 right-2 text-primary cursor-pointer w-8 h-8"
            onClick={onClose}
          >
            X
          </button>
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList className="flex bg-white justify-center p-4">
              <Tab
                className={`px-4 cursor-pointer ${
                  activeTab === 0 ? "border-b-2 border-blue-500" : ""
                }`}
              >
                Iniciar Sesión
              </Tab>
              <Tab
                className={`px-4 cursor-pointer ${
                  activeTab === 1 ? "border-b-2 border-blue-500" : ""
                }`}
              >
                Registrarse
              </Tab>
            </TabList>

            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <RegistrationForm />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
