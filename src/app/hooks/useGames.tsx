import { useState, useEffect } from "react";
import { Game } from "../types/types";
import { getGames } from "../services/firebase";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGames()
      .then((result: any) => {
        if (result.success) {
          setGames(result.games);
        } else {
          console.error("Error al obtener los juegos:", result.error);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los juegos:", error);
        setLoading(false);
      });
  }, []);

  return { games, loading };
};
