import { Avatar } from 'antd';

function generateRandomAvatarURL() {
  const randomString = Math.random().toString(36).substring(7);

  const baseURL = `https://robohash.org/${randomString}`;

  return baseURL;
}

export default function RandomAvatar() {
  const randomAvatarURL = generateRandomAvatarURL();

  return (
    <Avatar className='dark:bg-gray-200 w-[5em] h-[3em]' src={randomAvatarURL} />

  );
}
