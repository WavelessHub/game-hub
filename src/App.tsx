import { Grid, GridItem, Show } from "@chakra-ui/react";

import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GenreList />
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
