import { Avatar, Menu, Dropdown } from "antd";
import { DownOutlined, CrownOutlined } from "@ant-design/icons"; // Importa el ícono de la corona o el que desees
import CreateGame from "../CreateGame";
import { signOut } from "next-auth/react";
import useUser from "@/app/hooks/useUser";

function generateRandomAvatarURL() {
  const randomString = Math.random().toString(36).substring(7);
  const baseURL = `https://robohash.org/${randomString}`;
  return baseURL;
}

export default function RandomAvatar() {
  const randomAvatarURL = generateRandomAvatarURL();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  const { user } = useUser();

  const overlayRender = () => {
    return (
      <Menu className="w-48 dark:bg-gray-900">
         {/* @ts-ignore */}
        {user && user?.rol === "ADMIN" ? (
          <>
            <Menu.Item key="createGame">
              <CreateGame />
            </Menu.Item>
            <Menu.Item key="signOutAdmin">
              <button
                onClick={handleSignOut}
                className="button1 w-full text-white"
              >
                Sign out
              </button>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item key="signOutUser">
            <button onClick={handleSignOut} className="button1 w-full text-white">
              Sign out
            </button>
          </Menu.Item>
        )}
      </Menu>
    );
  };

  return (
    <Dropdown overlay={overlayRender} trigger={["click"]}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <Avatar
          className="bg-gray-200 dark:bg-gray-200 w-[3em] h-[3em]"
          src={randomAvatarURL}
          icon={<DownOutlined />}
        />
        {/* @ts-ignore */}
        {user && user?.rol === "ADMIN" && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              background: "white",
              padding: "2px",
              borderRadius: "50%",
            }}
          >
            <CrownOutlined style={{ color: "gold" }} /> {/* Usa el ícono que prefieras */}
          </div>
        )}
      </div>
    </Dropdown>
  );
}
