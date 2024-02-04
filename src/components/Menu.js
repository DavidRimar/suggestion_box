import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

function AppMenu(){
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Suggestion Box
                </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default AppMenu;