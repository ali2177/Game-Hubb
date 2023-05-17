import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Probs {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Probs) => {
  const header = `${gameQuery.selectedPlatform?.name || ""} ${
    gameQuery.genre?.name || ""
  } ${gameQuery?.sortOrder || ""} Games`;
  return (
    <Heading padding="1rem" as="h1">
      {header}
    </Heading>
  );
};

export default GameHeading;
