import { Grid, Typography } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import SubmitButton from "../../../components/SubmitButton";


function NewScreen() {
    return (<>
            <Typography variant={"h4"}>Add new suggestion</Typography>
            <br/>
            <Formik initialValues={{}}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="title" label="Title" type="text" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="description" label="Description" type="text" 
                            multiline fullWidth minRows={8}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={SubmitButton} label={"Publish Suggestion"}/>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </>
    );
};

export default NewScreen;