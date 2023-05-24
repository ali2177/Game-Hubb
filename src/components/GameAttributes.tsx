import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Detail from "./Detail";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";

interface Props {
  game: Game | undefined;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
      <GridItem w="100%">
        <Detail heading="Genres">
          {game?.parent_platforms?.map(({ platform }) => (
            <Text>{platform.name}</Text>
          ))}
        </Detail>
      </GridItem>
      <GridItem w="100%">
        <Detail heading="MetaCritics">
          {game ? <CriticScore score={game?.metacritic} /> : null}
        </Detail>
      </GridItem>
      <GridItem w="100%">
        <Detail heading="Genres">
          {game?.genres?.map((genre) => (
            <Text>{genre.name}</Text>
          ))}
        </Detail>
      </GridItem>
      <GridItem w="100%">
        <Detail heading="Publishers">
          {game?.publishers?.map((publisher) => (
            <Text>{publisher.name}</Text>
          ))}
        </Detail>
      </GridItem>
    </Grid>
  );
};

export default GameAttributes;
