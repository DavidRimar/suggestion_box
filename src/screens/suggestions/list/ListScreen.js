import { Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion"

function ListScreen() {
    return <Grid container spacing={2}>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
    </Grid>
}

export default ListScreen;