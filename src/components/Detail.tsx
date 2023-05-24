import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Platform } from "../entities/Platform";

interface Props {
  heading?: string;
  children: ReactNode | ReactNode[];
}

const Detail = ({ heading, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {heading}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default Detail;
