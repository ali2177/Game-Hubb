import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  txt: string;
}

const ExpandableText = ({ txt }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (txt.length <= limit) return <Text>{txt}</Text>;

  const summry = expanded ? txt : txt.substring(0, limit) + "...";
  return (
    <Text>
      {summry}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        mx={3}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
