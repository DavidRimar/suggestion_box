import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useModals, MODALS } from '../hooks/useModals';
import { useTheme, themes } from "../ThemeContext";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function AppMenu(){
    const navigate = useNavigate();
    const { authToken, handleLogout } = useAuth();
    const { showModal } = useModals();
    const { theme, toggleTheme } = useTheme();
    const [selected, setSelected] = React.useState(false);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar style={{
                    backgroundColor: theme === "light" ? `${themes.light.background}`: `${themes.dark.background}`,
                }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
                    Suggestion Box
                </Typography>
                    {authToken === false && (<>
                        <Button color="inherit" onClick={() => {
                            showModal(MODALS.LOGIN);
                        }}>Login</Button>
                        <Button color="inherit" onClick={() => {
                            showModal(MODALS.REG);
                        }}>Register</Button>
                    </>)}
                    {authToken !== false && (<>
                        <Button color="inherit" onClick={() => {
                            navigate("/myprofile");
                         }}>My Suggestions</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>)}
                    <ToggleButton
                        value="check"
                        selected={selected}
                        onChange={() => {
                            setSelected(!selected);
                            toggleTheme();
                        }}
                        >
                        <DarkModeOutlinedIcon />
                    </ToggleButton>

                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default AppMenu;