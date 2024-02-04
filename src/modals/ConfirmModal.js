import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";


function ConfirmModal() {
    return (<Dialog open={true}>
        <DialogTitle>
            Confirmation Required
        </DialogTitle>
        <DialogContent>
           <Typography variant="body2">
                Are you sure you want to delete this suggestion?
           </Typography>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="error">
                Yes
            </Button>
            <Button variant="outlined" >
                No
            </Button>
        </DialogActions>
    </Dialog>
    )
}

export default ConfirmModal;