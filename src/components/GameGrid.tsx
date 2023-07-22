import { SimpleGrid } from "@chakra-ui/react";

import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
