import { Avatar, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CreateGame from "../CreateGame";
import { useAuth } from "@/app/services/firebase";

function generateRandomAvatarURL() {
  const randomString = Math.random().toString(36).substring(7);
  const baseURL = `https://robohash.org/${randomString}`;
  return baseURL;
}

export default function RandomAvatar() {
  const randomAvatarURL = generateRandomAvatarURL();
  const { cerrarSesion } = useAuth();
  const menu = (
    <Menu className="w-48 dark:bg-gray-900">
      <Menu.Item key="1">
        <CreateGame />
      </Menu.Item>
      <Menu.Item key="2">
        <button onClick={cerrarSesion} className="button1 w-full text-white">
          Sign out
        </button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar
        className="bg-gray-200 dark:bg-gray-200 w-[5em] h-[3em]"
        src={randomAvatarURL}
        icon={<DownOutlined />}
      />
    </Dropdown>
  );
}
