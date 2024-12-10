import { Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion";
import AddSuggestion from "./components/AddSuggestion";
import { useNavigate } from "react-router-dom";
import { AXIOS_METHOD, makeApiCall, useApi } from "../../../hooks/useApi";
import LoadingBar from "../../../components/LoadingBar";
import { useAuth } from "../../../hooks/useAuth";
import { MODALS, useModals } from "../../../hooks/useModals";

function MyProfilePage() {
    const navigate = useNavigate();
    const { showModal } = useModals();
    const { sessionUser } = useAuth();
    const [ suggestionList, loading, error, refreshedSuggestions ] = useApi(AXIOS_METHOD.POST, '/suggestions', 
    {
        "author": sessionUser?.id,
        "limit": 5
    });

    function onDelete(id) {
        showModal(MODALS.CONFIRM_DELETE, {
            message: "Are you sure you want to delete this suggestion?",
            onConfirm: () => {
                makeApiCall(AXIOS_METHOD.POST, '/delete_suggestion', (_unusedDeleteItem) => {
                    // when delete is successful, refresh suggestion list
                    refreshedSuggestions(    {
                        "author": sessionUser?.id,
                        "limit": 5
                    });
                }, (message) => {
                    // when delete is unsuccessful, show error
                    showModal(MODALS.ERROR, {message});
                }, {id});
            }
        })
    }

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
                                onDelete={() => onDelete(item?.id)}
                    />)
        })}
    </Grid>
    <br/>
    {loading && <LoadingBar/>}
    </>
}

export default MyProfilePage;