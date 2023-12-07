import { Stack, Autocomplete as MuiAutocomplete, TextField, makeStyles } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
//import { searchGamesByName, getGames, getCards } from "../../services/firebase"
import { useGames } from "../hooks/useGames"
//import { Card, Game } from "../types/types";

interface GameAll {
  games: Game[];
}

export interface Game{
  categories: string[];
  description: string;
  id: number;
  image_url: string[] | string;
  name: string;
  platforms: string[];
  price: number;
  release_date: string;
  score: number;
  stock: number;
};

/*
interface Cards {
  card: Card[];
}
*/

/*
interface SearchAutocompleteProps {
  handleGameSelection: (event: any, selectedGame: Game | null) => void;
}
*/

interface SearchAutocompleteProps {
  handleGameSelection: (event: React.ChangeEvent<{}>, value: Game | null) => void;
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ handleGameSelection }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [game, setGame] = useState<Game | null>(null);
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const router = useRouter();
  //const {cards, gameAll } = useGames();
  const { gameAll } = useGames();

  //console.log(cards);
  //console.log(gameAll);

  useEffect(() => {
    if (gameAll.length > 0) {
      setGames(gameAll);
    }
  }, [gameAll]);

  // console.log("LOG DE GAMES: ", games);


const gameOptions = games.map((g) => ({
  categories: g.categories,
  description: g.description,
  id: g.id,
  image_url: g.image_url,
  name: g.name,
  platforms: g.platforms,
  price: g.price,
  release_date: g.release_date,
  score: g.score,
  stock: g.stock,
})) as Game[];

  // console.log("LOG DE GAME OPTIONS: ", gameOptions);
  
  return (
    <Stack spacing={2} width="225px" sx={{ backgroundColor: "#111827", borderRadius: "5px", border: "1px solid #6B7280" }}>
      <MuiAutocomplete
        options={gameOptions}
        getOptionLabel={(option) => (option && option.name) || ''}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            sx={{
              "& input": {
                borderColor: "#6B7280",
                backgroundColor: "#111827",
                color: "white"
              },
              "& label": {
                color: "white",
                fontSize: "15px",
              },
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        value={game}
        onChange={(event: React.ChangeEvent<{}>, value: Game | null) => {
          setGame(value);
          handleGameSelection(event, value);
        }}
        onInputChange={(event, newInputValue) => setSearchQuery(newInputValue)}
        />
    </Stack>
  );
};

export default SearchAutocomplete;