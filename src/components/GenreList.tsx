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
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const { gameQuery, setGenreID, setGenreName } = useGameQueryStore();

  const clickHandle = (genreID: number, genreName: string) => {
    setGenreID(genreID);
    setGenreName(genreName);
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
            background={genree.id === gameQuery.genreID ? "#3e495d" : ""}
            borderRadius={genree.id === gameQuery.genreID ? "10px" : ""}
            key={genree.id}
          >
            <HStack>
              <Image
                borderRadius={8}
                boxSize={genree.id === gameQuery.genreID ? "40px" : "32px"}
                objectFit="cover"
                src={getCroppedImageUrl(genree.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                _hover={{ transition: "all 0.3s", fontWeight: "bold" }}
                variant="unstyled"
                color={genree.id === gameQuery.genreID ? "#fffe01" : ""}
                fontWeight={genree.id === gameQuery.genreID ? "bold" : ""}
                fontSize={genree.id === gameQuery.genreID ? "15px" : "13px"}
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
