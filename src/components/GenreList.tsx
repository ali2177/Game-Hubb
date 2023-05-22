import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { SpinnerCircular } from "spinners-react";

interface Probs {
  onClick: (genreID: number, genreName: string) => void;
  genreID: number | null;
}

const GenreList = ({ onClick, genreID }: Probs) => {
  const { data, error, isLoading } = useGenres();

  const clickHandle = (genreID: number, genreName: string) => {
    onClick(genreID, genreName);
  };
  return (
    <>
      <Heading padding="5px 10px" fontSize="2xl" marginBottom="1rem">
        Genres
      </Heading>
      {isLoading && <SpinnerCircular />}
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
            background={genree.id === genreID ? "#3e495d" : ""}
            borderRadius={genree.id === genreID ? "10px" : ""}
            key={genree.id}
          >
            <HStack>
              <Image
                borderRadius={8}
                boxSize={genree.id === genreID ? "40px" : "32px"}
                objectFit="cover"
                src={getCroppedImageUrl(genree.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                _hover={{ transition: "all 0.3s", fontWeight: "bold" }}
                variant="unstyled"
                color={genree.id === genreID ? "#fffe01" : ""}
                fontWeight={genree.id === genreID ? "bold" : ""}
                fontSize={genree.id === genreID ? "15px" : "13px"}
                onClick={() => clickHandle(genree.id, genree.name)}
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
