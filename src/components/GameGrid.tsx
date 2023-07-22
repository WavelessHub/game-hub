import { SimpleGrid } from "@chakra-ui/react";
import { skeletons } from "../skeletons";

import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        paddingX="30px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
