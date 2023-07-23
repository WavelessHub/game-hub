import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { skeletons } from "../skeletons";

import getCroppedImageURL from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>

      {isLoading ? (
        <>
          {skeletons.map((skeleton) => (
            <GenreItemSkeleton key={skeleton} />
          ))}
        </>
      ) : (
        <List>
          {genres.map((genre) => (
            <ListItem marginBottom="20px" key={genre.id}>
              <HStack>
                <Image
                  src={getCroppedImageURL(genre.image_background)}
                  objectFit="cover"
                  borderRadius={8}
                  marginRight={2}
                  boxSize="50px"
                />

                <Button
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  whiteSpace="normal"
                  fontSize="large"
                  textAlign="left"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
