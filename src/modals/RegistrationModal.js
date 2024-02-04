import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import SubmitButton from "../components/SubmitButton";


function RegistrationModal() {
    return (<Dialog open={true}>
        <DialogTitle>
            Registration
        </DialogTitle>
        <DialogContent>
            <br/>
            <Formik initialValues={{}}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="username" label="UserName" type="text" fullWidth/>
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