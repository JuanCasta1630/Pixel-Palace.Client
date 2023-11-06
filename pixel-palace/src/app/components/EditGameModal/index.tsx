import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import InputField from "../Inputs/InputField";

const EditGameModal = ({ game, visible, onOk, onCancel }: any) => {
  const [form] = Form.useForm();
  const [birthdate, setBirthdate] = useState("");

  
  const handleOk = () => {
      console.log(game);
    if (game) {
      form.validateFields().then((values) => {
        onOk(game.id, values);
      });
    }
  };
  

  return (
    <Modal
      title="Editar Juego"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form form={form} initialValues={game}>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: "Por favor ingrese el nombre del juego" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Categoría"
          name="categoria"
          rules={[{ required: true, message: "Por favor ingrese la categoría del juego" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Fecha de Lanzamiento"
          name="fecha_lanzamiento"
          rules={[{ required: true, message: "Por favor ingrese la fecha de lanzamiento del juego" }]}
        >
          <InputField
              label="Birthday"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Your birthday"
              required
            />
        </Form.Item>
        <Form.Item
          label="Precio"
          name="precio"
          rules={[{ required: true, message: "Por favor ingrese el precio del juego" }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditGameModal;
