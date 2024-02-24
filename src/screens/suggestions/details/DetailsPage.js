import { Button, Grid, Typography } from "@mui/material";
import UserList from "./components/UserList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AXIOS_METHOD, makeApiCall } from "../../../hooks/useApi";

function DetailsPage() {
    const { id } = useParams();
    const [suggestion, setSuggestion] = useState(false);

    useEffect(() => {
        makeApiCall(AXIOS_METHOD.GET, `/suggestion/${id}`, (suggestionData) => {
            setSuggestion(suggestionData);
        });
    }, [id]);

    if (suggestion === false) {
        return null;
    }

    return (
            <Grid container spacing={2}>
                <br/>
                <Grid item xs={12}>
                    <Typography variant={"h2"}>{suggestion?.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    {suggestion?.description.split("\n").map(line => {
                        return <Typography variant={"body1"}>{line}</Typography>
                    })}
                </Grid>
                <Grid item xs={12}>
                    <UserList users={suggestion?.likes}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"outlined"} fullWidth> Like / Unlike</Button>
                </Grid>
            </Grid>
    );
};

export default DetailsPage;