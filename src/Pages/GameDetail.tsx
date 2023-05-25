import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { Box, Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useScreenShot from "../hooks/useScreenShot";
import GameScreenShot from "../components/GameScreenShot";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading>{data?.name}</Heading>
          <ExpandableText
            txt={data ? data.description_raw : ""}
          ></ExpandableText>
          <GameAttributes game={data} />
        </Box>
        <Box>
          <GameTrailer gameID={slug!} />
          <GameScreenShot gameID={slug!} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetail;
