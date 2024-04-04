import { Grid, LinearProgress } from "@mui/material";

export default function LoadingBar() {
    return <Grid container spacing={2}>
    <br/>
    <Grid item xs={12}>
        <LinearProgress/>
    </Grid>
</Grid>
}