import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import SubmitButton from "../components/SubmitButton";
import { AXIOS_METHOD, makeApiCall } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

function LoginModal({onClose}) {
    const { handleLoginResult } = useAuth();
    
    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <br/>
            <Formik initialValues={{ name: '', password: ''}} onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                makeApiCall(AXIOS_METHOD.POST, '/login', (data) => {
                    handleLoginResult(data);
                    onClose();
                }, (apiError) => {
                    actions.setFieldError('password', apiError);
                    actions.setSubmitting(false);
                }, values); 
            }}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="name" label="Username" type="text" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="password" label="Password" type="password" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={SubmitButton} label={"Login"}/>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>   
        </DialogContent>
    </Dialog>
    )
}

export default LoginModal;