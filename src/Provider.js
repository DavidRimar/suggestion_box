import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({ });

function Provider({children}) {
    return (
      <ThemeProvider theme={theme}>  
        <BrowserRouter>
            {children}
        </BrowserRouter>
      </ThemeProvider>
    );
  }
  
  export default Provider;