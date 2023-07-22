import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { skeletons } from "../skeletons";

import getCroppedImageURL from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
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
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
