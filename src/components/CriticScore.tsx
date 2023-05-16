import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "red" : "";
  return (
    <Badge
      fontSize="1rem"
      colorScheme={color}
      borderRadius="3px"
      padding="1px 8px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
