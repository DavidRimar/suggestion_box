import { Dialog, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { TextField, CheckboxWithLabel } from "formik-mui";
import SubmitButton from "../components/SubmitButton";
import { AXIOS_METHOD, makeApiCall } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

function validateRegFormValues(values) {
    const errors = {};
    if (values.password !== values.password_confirm) {
        errors['password_confirm'] = 'Passwords do not match!';
    }

    return errors;
}

function validateUsername(name) {
    const NAME_REGEX = /^[0-9a-zA-Z]*$/g;

    if (name?.length < 3) {
        return 'Name must be at least 3 characters!';
    }

    if (NAME_REGEX.test(name) === false) {
        return 'Name can only contain numbers, upper and lowercase characters!';
    }
}

function RegistrationModal({onClose}) {
    const { handleLoginResult } = useAuth();

    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>
            Registration
        </DialogTitle>
        <DialogContent>
            <br/>
            <Formik initialValues={{legal: false}} 
                validate={validateRegFormValues}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    const onFailure = (apiError) => {
                        actions.setFieldError('username', apiError);
                        actions.setSubmitting(false);
                    };

                makeApiCall(AXIOS_METHOD.POST, '/reg', (_unusuedRegData) => {
                    // login immediately
                    makeApiCall(AXIOS_METHOD.POST, '/login', (data) => {
                        handleLoginResult(data);
                        onClose();
                        }, onFailure, values);
                }, onFailure, values); 
            }}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="name" label="UserName" type="text" validate={validateUsername} fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="password" label="Password" type="text" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="password_confirm" label="Confirm Password" type="text" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={CheckboxWithLabel} 
                                   name="legal" 
                                   type="checkbox" 
                                   Label={{ label: "Terms & Conditions" }} 
                                   validate={value => value === false && 'Terms and Conditions required!'}
                                   fullWidth/>
                        </Grid>
                        <Typography variant={"body2"} color={"error"}>
                            <ErrorMessage name={"legal"}/>
                        </Typography>
                        <Grid item xs={12}>
                            <Field component={SubmitButton} label="Do the registration"/>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>   
        </DialogContent>
    </Dialog>
    )
}

export default RegistrationModal;