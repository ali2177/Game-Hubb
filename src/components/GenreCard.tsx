import React from "react";
import { Card, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Probs {
  genre: Genre;
}

const GenreCard = ({ genre }: Probs) => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Image
          borderRadius={8}
          boxSize="32px"
          src={getCroppedImageUrl(genre.image_background)}
        />
        <Text fontWeight="bold" fontSize="13px">
          {genre.name}
        </Text>
      </HStack>
    </ListItem>
  );
};

export default GenreCard;
