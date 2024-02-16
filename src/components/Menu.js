import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppMenu(){
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Suggestion Box
                </Typography>
                    <Button color="inherit" onClick={() => {
                        navigate("/myprofile");
                    }}>My Suggestions</Button>
                    <Button color="inherit">Logout</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default AppMenu;