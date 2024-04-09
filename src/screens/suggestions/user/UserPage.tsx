import { Grid, Typography } from "@mui/material";
import Suggestion from "../../../components/Suggestion"
import { AXIOS_METHOD, useApi } from "../../../hooks/useApi";
import LoadingBar from "../../../components/LoadingBar";
import { useNavigate, useParams } from "react-router-dom";

function UserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ author, loadingAuthor, errorAuthor ] = useApi(AXIOS_METHOD.POST, `/user/${id}`);
    const [ suggestions, loadingSuggestions, errorSuggestions ] = useApi(AXIOS_METHOD.POST, '/suggestions', 
    {
        "author": id,
        "limit": 5,
        "cursor": ""
    });

    console.log("suggestions:", suggestions?.suggestions);

    if ((loadingSuggestions === false && errorSuggestions !== false) || 
        (loadingAuthor === false && errorAuthor !== false)) {
            navigate('/500');
            return null;
    }

    return <Grid container spacing={2}>
        <Grid item xs={12}>
            {loadingAuthor === false && author !== false && 
            <Typography variant={"h6"}>Suggestions by {author?.name}:</Typography>}
        </Grid>
        {loadingSuggestions === false && suggestions?.suggestions?.map(item => {
            return (<Suggestion key={item?.id} id={item?.id} 
                                description={item?.description} 
                                title={item?.title}
                    />)
        })}
        {loadingSuggestions === false && suggestions?.suggestions?.length === 0 &&
            <Typography variant={"h7"} sx={{ m: 3 }}>{author?.name} has been a lazy sloth to make a suggestion!</Typography>}
        <br/>
        {(loadingSuggestions || loadingAuthor) && <LoadingBar/>}
    </Grid>
}

export default UserPage;