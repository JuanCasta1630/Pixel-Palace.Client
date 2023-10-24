import React, { ReactElement, useState } from "react";
import Login from "../login";
import RegistrationForm from "../registro";
import { AuthModalProps } from "@/app/types/types";
import { Tabs, Button, Modal } from "antd";
import { CloseCircleFilled } from "@ant-design/icons"; // Importa el icono de Ant Design

const { TabPane } = Tabs;

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab,
}): ReactElement => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
      closeIcon={false}
    >
      <div className="text-right">
        <Button
          type="text"
          onClick={onClose}
        >
          <CloseCircleFilled className="text-primary"/> 
        </Button>
      </div>
      <Tabs
        activeKey={activeTab.toString()}
        onChange={(key) => setActiveTab(Number(key))}
        centered
      >
        <TabPane
          tab={
            <span className="text-green-500">Iniciar Sesión</span> 
          }
          key="0"
        >
          <Login />
        </TabPane>
        <TabPane
          tab={
            <span className="text-green-500">Registrarse</span> 
          }
          key="1"
        >
          <RegistrationForm />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default AuthModal;
