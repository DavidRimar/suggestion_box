import { Grid } from "@mui/material";
import Suggestion from "../../../components/Suggestion"
import axios from "axios";
import { useEffect, useState } from "react";

function ListScreen() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.post('https://otletdoboz.webuni.workers.dev/suggestions', {
            "author": "",
            "limit": 5,
            "cursor": ""
        }).then(response => {
            setList(response.data.suggestions)
        })
    }, [setList])
    return <Grid container spacing={2}>
        {list.map(item => {
            return (<Suggestion {...item}/>)
        })}
    </Grid>
}

export default ListScreen;