import { Delete, Favorite } from "@mui/icons-material";
import { Grid, Card, CardActions, CardContent, Button, Typography, IconButton } from "@mui/material";

function Suggestion({title}, {description}) {
    return <Grid item xs={12} md={4} lg={3}>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant={"h4"}>
                    {title}
                </Typography>
                <Typography variant={"body1"}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant={"outlined"}>Details</Button>
                <IconButton>
                    <Favorite/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
            </CardActions>
    </Card>
  </Grid>  
}

export default Suggestion;