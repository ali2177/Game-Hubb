import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreID: number | null;
  genreName: string | null;
  selectedPlatform: string | null;
  selectedPlatformID: number | null;
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
        <GridItem marginTop="2rem" area="aside">
          <GenreList
            onClick={(genreID, genreName) =>
              setGameQuery({ ...gameQuery, genreID, genreName })
            }
            genreID={gameQuery.genreID}
          />
        </GridItem>
      </Show>

      <GridItem marginTop="2rem" area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack>
          <Box padding="5px 10px">
            <PlatformSelector
              onSelcetedPlatform={(selectedPlatform, selectedPlatformID) =>
                setGameQuery({
                  ...gameQuery,
                  selectedPlatform,
                  selectedPlatformID,
                })
              }
              platformName={gameQuery.selectedPlatform}
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
