import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import SubmitButton from "../components/SubmitButton";


function LoginModal({onClose}) {
    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <br/>
            <Formik initialValues={{}}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="username" label="Username" type="text" fullWidth/>
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