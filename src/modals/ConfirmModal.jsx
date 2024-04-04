import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";


function ConfirmModal({onClose, onConfirm, message}) {
    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>
            Confirmation Required
        </DialogTitle>
        <DialogContent>
           <Typography variant="body2">
                {message}
           </Typography>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="success" onClick={() => {
                onConfirm();
                onClose();
                }}>
                Yes
            </Button>
            <Button variant="outlined" onClick={onClose}>
                No
            </Button>
        </DialogActions>
    </Dialog>
    )
}

export default ConfirmModal;