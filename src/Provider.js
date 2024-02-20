import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./hooks/useAuth";

const theme = createTheme({ });

function Provider({children}) {
    return (
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <BrowserRouter>
              {children}
          </BrowserRouter>  
        </AuthContextProvider>
      </ThemeProvider>
    );
  }
  
  export default Provider;