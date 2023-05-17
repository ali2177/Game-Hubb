import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
  userInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(userInput) => setGameQuery({ ...gameQuery, userInput })}
        />
      </GridItem>
      <Show>
        <GridItem area="aside">
          <GenreList
            onClick={(genre) => setGameQuery({ ...gameQuery, genre })}
            genre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack>
          <Box padding="5px 10px">
            <PlatformSelector
              onSelcetedPlatform={(selectedPlatform) =>
                setGameQuery({ ...gameQuery, selectedPlatform })
              }
              selectedPlatform={gameQuery.selectedPlatform}
            />
          </Box>
          <SortSelector
            onSlectedOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            selectedSortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
