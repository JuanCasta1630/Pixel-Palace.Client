"use client";
import GameContainer from "./components/GameContainer";
import { StoreProvider } from "./utils/store"

export default function Home() {

  return  (
    <StoreProvider>
      <GameContainer />;
    </StoreProvider>
  )
}
