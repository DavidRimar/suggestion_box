import { Grid, Typography } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import SubmitButton from "../../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { makeApiCall, AXIOS_METHOD } from "../../../hooks/useApi";

function validateTitle(title) {
    if (title === '') {
        return 'There should be title!';
    }
    if (title.length > 80) {
        return 'Maximum length of the title should be 80 characters!';
    }
}

function validateDescription(description) {
    if (description === '') {
        return 'Describe your suggestion!';
    }
}

function AddScreen() {
    const navigate = useNavigate();

    return (<>
            <Typography variant={"h4"}>Add new suggestion</Typography>
            <br/>
            <Formik initialValues={{}} onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                makeApiCall(AXIOS_METHOD.POST, '/add_suggestion', (_unusedData) => {
                    // if success, navigate to suggestion details page
                    actions.setSubmitting(false);
                    navigate("/myprofile");
                }, (apiError) => {
                    actions.setFieldError('title', apiError);
                    actions.setSubmitting(false);
                }, values); 
            }}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="title" label="Title" type="text" fullWidth
                                validate={validateTitle}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="description" label="Description" type="text" 
                            multiline fullWidth minRows={8} validate={validateDescription}/>
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

export default AddScreen;