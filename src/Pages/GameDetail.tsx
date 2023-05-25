import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

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
      <GameTrailer gameID={slug!} />
    </>
  );
};

export default GameDetail;
