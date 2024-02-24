import { Button, Grid, Typography } from "@mui/material";
import UserList from "./components/UserList";
import { useNavigate, useParams } from "react-router-dom";
import { AXIOS_METHOD, useApi } from "../../../hooks/useApi";
import LoadingBar from "../../../components/LoadingBar";

function DetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [suggestion, loading, error] = useApi(AXIOS_METHOD.GET, `/suggestion/${id}`);

    if (loading === true) {
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