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
} from "@/app/services/firebase";
import InputField from "../Inputs/InputField";
import { categorias } from "../../services/categories.json";
import { useGames } from "@/app/hooks/useGames";

const { Option } = Select;

function CreateGame() {
  const [modalVisible, setModalVisible] = useState(false);
  const [birthdate, setBirthdate] = useState("");
  const [imagen, setImagen] = useState(null);
  const [gameType, setGameType] = useState(null);
  const { gameAll } = useGames();

  const modalCloseStyles =
    "absolute right-2 top-0.5 text-gray-400 hover:text-red-500 text-2xl";
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
          type: gameType,
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
        className="button1 w-full"
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleOpenModal}
      >
        Create Product
      </Button>
      <Modal
        title={
          <div className="dark:bg-gray-900 p-4 text-white">Create Product</div>
        }
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className="bg-white dark:bg-gray-900 rounded-md text-center"
        closeIcon={<span className={modalCloseStyles}>&times;</span>}
      >
        <Form onFinish={handleSave}>
          <Form.Item
            label="Name"
            name="nombre"
            className="dark:text-black"
            rules={[
              {
                required: true,
                message: "Please enter the game name",
              },
            ]}
          >
            <Input className="bg-gray-400 border-none outline-none w-full text-white dark:text-black" />
          </Form.Item>
          <Form.Item label="Category" name="categoria">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Select or enter categories"
            >
              {categorias.map((category) => (
                <Option
                  key={category.id}
                  value={category.name}
                  className="bg-gray-400 border-none outline-none w-full text-white dark:text-black"
                >
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Platform" name="desarrollador">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Select or enter platform"
              // onSelect={(value) => {
              //   // Handle game selection here
              // }}
            >
            {gameAll.map((game: any) => (
              <>
                  <Option
                    key={game?.id}
                    value={game?.desarrollador}
                    className="bg-gray-400 border-none outline-none w-full text-white dark:text-black"
                  >
                    {game?.desarrollador}
                  </Option>
              </>
            ))}
            </Select>
          </Form.Item>
          <Form.Item label="Release date" name="fecha_lanzamiento">
            <InputField
              label="Birthday"
              type="date"
              value={birthdate}
              //@ts-ignore
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Your birthday"
              required
            />
          </Form.Item>
          <Form.Item label="Price" name="precio">
            <InputNumber
              style={{ width: "100%" }}
              className="bg-gray-400 border-none outline-none w-full text-white dark:text-black"
            />
          </Form.Item>
          <Form.Item label="Type" name="gameType">
            <Select
              style={{ width: "100%" }}
              onChange={(value) => setGameType(value)}
            >
              <Option value="Game">Game</Option>
              <Option value="Card">Card</Option>
            </Select>
          </Form.Item>
          <Form.Item name="imagen">
            <Upload
              beforeUpload={(file: any) => {
                setImagen(file);
                return false;
              }}
              showUploadList={false}
            >
              {imagen ? (
                <Button className="button1" icon={<PlusOutlined />}>
                  Change image
                </Button>
              ) : (
                <Button className="button1" icon={<PlusOutlined />}>
                  Upload Image
                </Button>
              )}
            </Upload>
            {imagen && (
              <Button
                type="link"
                onClick={() => setImagen(null)}
                className="text-red-500"
              >
                Delete image
              </Button>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button1 w-full">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateGame;
