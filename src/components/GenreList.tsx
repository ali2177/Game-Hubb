import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

import React from "react";

const GenreList = () => {
  const { genres, error, isloading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
