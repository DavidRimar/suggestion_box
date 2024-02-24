import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useModals, MODALS } from '../hooks/useModals';

function AppMenu(){
    const navigate = useNavigate();
    const { handleLoginResult, handleLogout, authToken } = useAuth();
    const { showModal } = useModals();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                    <button onClick={() => {
                        handleLoginResult({
                            "token": "",
                            "user": {
                                "id": "",
                                "name": "",
                                "likes": []
                            }
                        })
                    }}>DummyLogin</button>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default AppMenu;