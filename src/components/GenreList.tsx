import { Card, HStack, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Probs {
  onClick: (genre: Genre) => void;
}

const GenreList = ({ onClick }: Probs) => {
  const { genres, error, isloading } = useGenres();

  const clickHandle = (genre: Genre) => {
    console.log(genre);
    onClick(genre);
  };
  return (
    <Card padding="5px">
      <List>
        {genres.map((genre) => (
          <ListItem paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontWeight="bold"
                fontSize="13px"
                onClick={() => clickHandle(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default GenreList;
