import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

import getCroppedImageURL from "../services/image-url";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack marginBottom={4} justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore metacritic={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
