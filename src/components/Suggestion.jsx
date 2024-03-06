import { Delete, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Grid, Card, CardActions, CardContent, Button, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLike from "../hooks/useLike";

function Suggestion({id, title, description, onDelete}) {
    const navigate = useNavigate();
    const [isLiked, onLikeChange] = useLike(id);

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
                <IconButton onClick={() => onLikeChange()}>
                    {isLiked ? <Favorite/> : <FavoriteBorder/>}
                </IconButton>
                {onDelete && <IconButton onClick={onDelete}>
                    <Delete/>
                </IconButton>}
            </CardActions>
    </Card>
  </Grid>  
}

export default Suggestion;