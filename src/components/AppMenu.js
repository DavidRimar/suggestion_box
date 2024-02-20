import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AppMenu(){
    const navigate = useNavigate();
    const { handleLoginResult, handleLogout, authToken } = useAuth();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Suggestion Box
                </Typography>
                    {authToken === false && (<>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Register</Button>
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