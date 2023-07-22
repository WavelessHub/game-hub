import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

import getCroppedImageURL from "../services/image-url";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize="44px"
              marginRight={2}
              borderRadius={8}
            />
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
