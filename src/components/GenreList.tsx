import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { skeletons } from "../skeletons";

import getCroppedImageURL from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading)
    return (
      <>
        {skeletons.map((skeleton) => (
          <GenreItemSkeleton key={skeleton} />
        ))}
      </>
    );

  return (
    <List>
      {genres.map((genre) => (
        <ListItem marginBottom="20px" key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize="50px"
              marginRight={2}
              borderRadius={8}
            />
            <Button
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontSize="large"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
