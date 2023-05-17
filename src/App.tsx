import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

interface GameQuery {
  genre: Genre | null;
  selectedPlatform: Platform | null;
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
        <NavBar />
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
        <PlatformSelector
          onSelcetedPlatform={(selectedPlatform) =>
            setGameQuery({ ...gameQuery, selectedPlatform })
          }
          selectedPlatform={gameQuery.selectedPlatform}
        />
        <GamesGrid
          genre={gameQuery.genre}
          selectedPlatform={gameQuery.selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
