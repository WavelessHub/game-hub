import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then(({ data }) => setGames(data.results))
      .catch(({ message }) => setError(message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}

      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
