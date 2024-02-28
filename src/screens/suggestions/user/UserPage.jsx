import { Grid, Typography } from "@mui/material";
import Suggestion from "../../../components/Suggestion"

function UserPage() {
    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant={"h6"}>Suggestions by apple:</Typography>
        </Grid>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
    </Grid>
}

export default UserPage;