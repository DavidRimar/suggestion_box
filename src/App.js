import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, Container } from "@mui/material";
import ListScreen from "./screens/suggestions/list/ListScreen";
import AppMenu from './components/Menu';
//import DetailsScreen from './screens/suggestions/details/DetailsPage';

const theme = createTheme({ });

function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppMenu/>
    <br/>
      <Container maxWidth={"lg"}>
          <ListScreen/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
