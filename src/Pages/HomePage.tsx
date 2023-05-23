import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" "aside"`,
        lg: `"aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem marginTop="2rem" area="aside">
        <GenreList />
      </GridItem>

      <GridItem marginTop="2rem" area="main">
        <GameHeading />
        <HStack>
          <Box padding="5px 10px">
            <PlatformSelector />
          </Box>
          <SortSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;
