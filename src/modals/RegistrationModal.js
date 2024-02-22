import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import SubmitButton from "../components/SubmitButton";
import { AXIOS_METHOD, makeApiCall } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

function RegistrationModal({onClose}) {
    const { handleLoginResult } = useAuth();

    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>
            Registration
        </DialogTitle>
        <DialogContent>
            <br/>
            <Formik initialValues={{}} onSubmit={(values, actions) => {
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
                            <Field component={TextField} name="name" label="UserName" type="text" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="password" label="Password" type="text" fullWidth/>
                        </Grid>
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