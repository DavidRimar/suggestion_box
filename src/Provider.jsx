import { createTheme } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./hooks/useAuth";
import { ModalContextProvider } from "./hooks/useModals";
import { ThemeProvider } from "./ThemeContext";

function Provider({children}) {
    return (
      <ThemeProvider>
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