import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import Detail from "../components/Detail";
import GameAttributes from "../components/GameAttributes";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText txt={data ? data.description_raw : ""}></ExpandableText>
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetail;
