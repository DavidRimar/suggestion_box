import { Button, Grid, Typography } from "@mui/material";
import UserList from "./components/UserList";
import { useNavigate, useParams } from "react-router-dom";
import { AXIOS_METHOD, useApi } from "../../../hooks/useApi";
import LoadingBar from "../../../components/LoadingBar";
import useLike from "../../../hooks/useLike";

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

function DetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLiked, onLikeChange] = useLike(id);
    const [suggestion, loading, error, refreshSuggestion] = useApi(AXIOS_METHOD.POST, `/suggestion/${id}`);

    console.log("suggestion: ", suggestion);
    if (loading === true && suggestion === false) {
        return <LoadingBar/>;
    }

    if (loading === false && error !== false) {
        navigate('/404');
        return null;
    }

    return (
            <Grid container spacing={2}>
                <br/>
                <Grid item xs={12}>
                    <Typography variant={"h2"}>{suggestion?.title}</Typography>
                    <Typography variant={"h7"}>Created At: {formatDate(suggestion?.created_at)}</Typography>
                    <br/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h7"}>Author:  
                        <UserList users={[suggestion?.author] || []}/>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h7"}>Description</Typography>
                    {suggestion?.description?.split("\n").map(line => {
                        return <Typography key={line} variant={"body1"}>{line}</Typography>
                    })}
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"subtitle2"}>Liked by:</Typography> {" "}
                    <UserList users={suggestion?.likes || []}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"outlined"} onClick={() => {
                        onLikeChange(refreshSuggestion);
                        }} fullWidth> {isLiked ? 'Unlike' : 'Like'}</Button>
                </Grid>
            </Grid>
    );
}

export default DetailsPage;