import { Button, Grid, Typography } from "@mui/material";
import UserList from "./components/UserList";

function DetailsPage() {
    return (
            <Grid container spacing={2}>
                <br/>
                <Grid item xs={12}>
                    <Typography variant={"h2"}>I have a suggestion</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body1"}>Lorem Ipsum</Typography>
                </Grid>
                <Grid item xs={12}>
                    <UserList/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"outlined"} fullWidth> Like / Unlike</Button>
                </Grid>
            </Grid>
    );
};

export default DetailsPage;