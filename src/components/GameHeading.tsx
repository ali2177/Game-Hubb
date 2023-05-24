import { Heading } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatform";
import { Genre } from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const header = `${gameQuery.selectedPlatform || ""} ${
    gameQuery.genreName || ""
  } ${gameQuery?.sortOrder || ""} Games`;

  return (
    <Heading padding="1rem" as="h1">
      {header}
    </Heading>
  );
};

export default GameHeading;
