import {
  Card,
  HStack,
  Image,
  List,
  ListItem,
  Button,
  transition,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Probs {
  onClick: (genre: Genre) => void;
  genre: Genre | null;
}

const GenreList = ({ onClick, genre }: Probs) => {
  const { data, error, isLoading } = useGenres();

  const clickHandle = (genre: Genre) => {
    console.log(genre);
    onClick(genre);
  };
  return (
    <>
      <Heading padding="5px 10px" fontSize="2xl" marginBottom="1rem">
        Genres
      </Heading>
      <List padding="0px 10px">
        {data?.results.map((genree) => (
          <ListItem
            _hover={{
              background: "#3e495d",
              color: "#fffe01",
              borderRadius: "10px",
              transition: "all 0.5s",
            }}
            paddingY="5px"
            background={genree.id === genre?.id ? "#3e495d" : ""}
            borderRadius={genree.id === genre?.id ? "10px" : ""}
            key={genree.id}
          >
            <HStack>
              <Image
                borderRadius={8}
                boxSize={genree.id === genre?.id ? "40px" : "32px"}
                objectFit="cover"
                src={getCroppedImageUrl(genree.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                _hover={{ transition: "all 0.3s", fontWeight: "bold" }}
                variant="unstyled"
                color={genree.id === genre?.id ? "#fffe01" : ""}
                fontWeight={genree.id === genre?.id ? "bold" : ""}
                fontSize={genree.id === genre?.id ? "15px" : "13px"}
                onClick={() => clickHandle(genree)}
              >
                {genree.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
