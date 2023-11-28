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
// import { categorias } from "../../services/categories.json";
import { useGames } from "@/app/hooks/useGames";
import usePlatformAndCategories from "@/app/hooks/usePlatformAndCategories";
import Loading from "@/app/loading";
import { createProduct } from "@/app/servers/reques";

const { Option } = Select;

function CreateGame() {
  const [modalVisible, setModalVisible] = useState(false);
  const [birthdate, setBirthdate] = useState("");
  const [imagen, setImagen] = useState(null);
  const [gameType, setGameType] = useState(null);
  const { gameAll } = useGames();
  const [imageError, setImageError] = useState(false);

  const modalCloseStyles =
    "absolute right-2 top-0.5 text-gray-400 hover:text-red-500 text-2xl";
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const { plataformas, categorias } = usePlatformAndCategories();
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [selectedPlatformIds, setSelectedPlatformIds] = useState([]);
 console.log(categorias);
 
  const handleSave = async (values: any) => {
    try {
      if (imagen) {
        const downloadURL = await uploadImageToFirebaseStorage(imagen);
        console.log(imagen);
        
        const gameDataWithImage = {
          ...values,
          imagen_url: downloadURL,
          release_date: birthdate,
          categorie_id: selectedCategoryIds,
          platform_id: selectedPlatformIds,
        };

        const result = await createProduct(gameDataWithImage);
        console.log(result);
        
        if (result.success) {
          console.log(`Juego creado con éxito. ID del juego: ${result.gameId}`);
          setModalVisible(false);
        } else {
          console.error(`Error al crear el juego: ${result.error}`);
        }
      } else {
        setImageError(true);
      }
    } catch (error) {
      console.error(`Error al subir la imagen a Firebase: ${error}`);
    }
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
              onChange={(values) => setSelectedCategoryIds(values)}
            >
              {categorias.map((category: any) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Platform" name="desarrollador">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Select or enter platform"
              onChange={(values) => setSelectedPlatformIds(values)}
            >
              {plataformas.map((platform: any) => (
                <Option key={platform} value={platform}>
                  {platform}
                </Option>
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
          <Form.Item name="imagen">
            <Upload
              beforeUpload={(file: any) => {
                setImagen(file);
                setImageError(false);
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
            {imageError && (
              <div className="text-red-500">
                Please upload an image (required).
              </div>
            )}
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
