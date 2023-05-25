import useGamesTrailers from "../hooks/useGameTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameID: string;
}
const GameTrailer = ({ gameID }: Props) => {
  const {
    data: trailer,
    error: err,
    isLoading: TrailerLoading,
  } = useGamesTrailers(gameID);

  if (TrailerLoading) return <Spinner />;

  if (err) throw err;

  return (
    <video
      width="100%"
      height="240"
      poster={trailer?.results[0]?.preview}
      controls
    >
      <source src={trailer?.results[0]?.data.max} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default GameTrailer;
