import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  createGame,
  uploadImageToFirebaseStorage,
} from "@/app/services/firebase"; // Importa uploadImageToFirebaseStorage
import InputField from "../Inputs/InputField";

const { Option } = Select;

function CreateGame() {
  const [modalVisible, setModalVisible] = useState(false);
  const [birthdate, setBirthdate] = useState("");
  const [imagen, setImagen] = useState(null); 

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleSave = async (values: any) => {
    try {
      if (imagen) {
        const downloadURL = await uploadImageToFirebaseStorage(imagen);
        const gameDataWithImage = {
          ...values,
          imagen: downloadURL,
          fecha_lanzamiento: birthdate,
        };

        const result = await createGame(gameDataWithImage);

        if (result.success) {
          console.log(`Juego creado con éxito. ID del juego: ${result.gameId}`);
        } else {
          console.error(`Error al crear el juego: ${result.error}`);
        }
      } else {
        console.error("Debes seleccionar una imagen para subir.");
      }
    } catch (error) {
      console.error(`Error al subir la imagen a Firebase: ${error}`);
    }

    setModalVisible(false);
  };

  return (
    <div>
      <Button
        className="button1"
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleOpenModal}
      >
        Agregar Juego
      </Button>
      <Modal
        title="Agregar Juego"
        visible={modalVisible} // Debe ser "visible" en lugar de "open"
        onCancel={handleCancel}
        footer={null}
        className="bg-white dark:bg-gray-900 rounded-md text-center"
      >
        <Form onFinish={handleSave}>
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[
              {
                required: true,
                message: "Por favor, ingresa el nombre del juego",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Categoría" name="categoria">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Selecciona o escribe las categorías"
            />
          </Form.Item>
          <Form.Item label="Desarrollador" name="desarrollador">
            <Input />
          </Form.Item>
          <Form.Item label="Fecha de Lanzamiento" name="fecha_lanzamiento">
            <InputField
              label="Birthday"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Your birthday"
              required
            />
          </Form.Item>
          <Form.Item label="Precio" name="precio">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Imagen" name="imagen">
            <Upload
              beforeUpload={(file: any) => {
                setImagen(file);
                return false;
              }}
            >
              {imagen ? null : (
                <Button icon={<PlusOutlined />}>Subir Imagen</Button>
              )}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateGame;
