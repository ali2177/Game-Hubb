import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SeletonLoading from "./SeletonLoading";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Probs {
  genre: Genre | null;
  selectedPlatform: Platform | null;
}

const GamesGrid = ({ genre, selectedPlatform }: Probs) => {
  const { games, error, isloading } = useGames(
    {
      params: { genres: genre?.id, platforms: selectedPlatform?.id },
    },
    [genre?.id, selectedPlatform?.id]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text color="red">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isloading && skeletons.map((skeleton) => <SeletonLoading />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
