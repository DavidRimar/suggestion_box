import { Delete, Favorite } from "@mui/icons-material";
import { Grid, Card, CardActions, CardContent, Button, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Suggestion({id, title, description}) {
    const navigate = useNavigate();
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
                <Button size="small" variant={"outlined"} fullWidth onClick={() => {
                        navigate(`/suggestion/${id}`)
                }}>Details</Button>
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