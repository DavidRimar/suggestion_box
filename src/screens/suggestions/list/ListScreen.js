import { Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion"
import { AXIOS_METHOD, useApi } from "../../../hooks/useApi";
import LoadingBar from "../../../components/LoadingBar";
import { useNavigate } from "react-router-dom";

function ListScreen() {
    const navigate = useNavigate();
    const [suggestionList, loading, error] = useApi(AXIOS_METHOD.GET, '/suggestions', 
    {
        "author": "",
        "limit": 5,
        "cursor": ""
    });

    if (loading === true) {
        return <LoadingBar/>;
    }

    if (loading === false && error !== false) {
        navigate('/500');
        return null;
    }

    return <Grid container spacing={2}>
        {suggestionList?.suggestions.map(item => {
            return (<Suggestion id={item?.id} 
                                description={item?.description} 
                                title={item?.title}/>)
        })}
    </Grid>
}

export default ListScreen;