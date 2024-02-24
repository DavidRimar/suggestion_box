import { Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion";
import AddSuggestion from "./components/AddSuggestion";

function MyProfilePage() {
    return <Grid container spacing={2}>
        <Suggestion onDelete={() => console.log("delete clicked")}/>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
        <AddSuggestion/>
    </Grid>
}

export default MyProfilePage;