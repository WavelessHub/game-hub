import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
