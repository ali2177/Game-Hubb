import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);
  console.log(genre);
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
          <GenreList onClick={(genre) => setGenre(genre)} genre={genre} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesGrid genre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
