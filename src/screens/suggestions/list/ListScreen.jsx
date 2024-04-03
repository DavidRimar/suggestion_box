import { Button, Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion"
import LoadingBar from "../../../components/LoadingBar";
import { useNavigate } from "react-router-dom";
import useSuggestions from "../../../hooks/useSuggestions";

function ListScreen() {
    const navigate = useNavigate();
    const [suggestions, loading, error, onMore] = useSuggestions("", 3);

    console.log(suggestions)

    if (loading === true) {
        return <LoadingBar/>;
    }

    if (loading === false && error !== false) {
        navigate('/500');
        return null;
    }

    return <Grid container spacing={2}>
        {suggestions.map(item => {
            return (<Suggestion key={item?.id} id={item?.id} 
                                description={item?.description} 
                                title={item?.title}
                    />)
        })}
        <Button onClick={onMore}>Load More!</Button>
    </Grid>
}

export default ListScreen;