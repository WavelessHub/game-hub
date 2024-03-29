import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: {
    platform: Platform;
  }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
