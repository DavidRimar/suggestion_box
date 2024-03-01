import { Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion";
import AddSuggestion from "./components/AddSuggestion";
import { useNavigate } from "react-router-dom";
import { AXIOS_METHOD, useApi } from "../../../hooks/useApi";
import LoadingBar from "../../../components/LoadingBar";
import { useAuth } from "../../../hooks/useAuth";

function MyProfilePage() {
    const navigate = useNavigate();
    const { sessionUser } = useAuth();
    const [suggestionList, loading, error] = useApi(AXIOS_METHOD.POST, '/suggestions', 
    {
        "author": sessionUser?.id,
        "limit": 5,
        "cursor": ""
    });

    if (loading === false && error !== false) {
        navigate('/500');
        return null;
    }

    return <>
    <Grid container spacing={2}>
        <AddSuggestion/>
        {loading === false && suggestionList?.suggestions?.map(item => {
            return (<Suggestion key={item?.id} id={item?.id} 
                                description={item?.description} 
                                title={item?.title}
                                onDelete={() => console.log("delete clicked")}
                    />)
        })}
    </Grid>
    <br/>
    {loading && <LoadingBar/>}
    </>
}

export default MyProfilePage;