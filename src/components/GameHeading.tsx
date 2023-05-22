import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { Platform } from "../hooks/usePlatform";
import { Genre } from "../hooks/useGenres";

interface Probs {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Probs) => {
  const header = `${gameQuery.selectedPlatform || ""} ${
    gameQuery.genreName || ""
  } ${gameQuery?.sortOrder || ""} Games`;

  console.log(gameQuery.selectedPlatform);
  return (
    <Heading padding="1rem" as="h1">
      {header}
    </Heading>
  );
};

export default GameHeading;
