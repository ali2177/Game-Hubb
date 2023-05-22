import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SeletonLoading from "./SeletonLoading";
import { GameQuery } from "../App";
import React from "react";
import { SpinnerInfinity } from "spinners-react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Probs {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Probs) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text color="red">{error.message}</Text>}

      <InfiniteScroll
        dataLength={data?.pages ? data.pages.length : 0} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={true}
        loader={
          <HStack justifyContent="center" marginY={5}>
            <SpinnerInfinity size={250} color="#fff" speed={120} />{" "}
          </HStack>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={3}
        >
          {isLoading &&
            skeletons.map((skeleton, index) => <SeletonLoading key={index} />)}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}

          {/* {hasNextPage && (
          <Button
            marginY={5}
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? <SpinnerInfinity /> : "Load Page"}
          </Button>
        )} */}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GamesGrid;
