import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();

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
