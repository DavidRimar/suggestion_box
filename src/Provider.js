import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./hooks/useAuth";
import { ModalContextProvider } from "./hooks/useModal";

const theme = createTheme({ });

function Provider({children}) {
    return (
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <ModalContextProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
          </ModalContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    );
  }
  
  export default Provider;