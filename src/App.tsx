import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show>
        <GridItem marginTop="2rem" area="aside">
          <GenreList />
        </GridItem>
      </Show>

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
}

export default App;
