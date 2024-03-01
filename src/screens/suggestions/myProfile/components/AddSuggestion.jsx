import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddSuggestion() {
    const navigate = useNavigate();
    return <Grid item xs={12}>
            <Button variant={"outlined"} fullWidth onClick={() => {
                    navigate('/new')
                }}>Add new suggestion</Button>
    </Grid>  
}

export default AddSuggestion;