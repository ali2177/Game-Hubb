import { Card, HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

import React from "react";
import GenreCard from "./GenreCard";

const GenreList = () => {
  const { genres, error, isloading } = useGenres();
  return (
    <Card padding="5px">
      <List>
        {genres.map((genre) => (
          <GenreCard genre={genre} />
        ))}
      </List>
    </Card>
  );
};

export default GenreList;
