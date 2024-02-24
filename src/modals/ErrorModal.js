import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

function ErrorModal({onClose, message}) {
    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>
            Error
        </DialogTitle>
        <DialogContent>
           <Typography variant={"body2"}>
                {message}
           </Typography>
        </DialogContent>
    </Dialog>
    )
}

export default ErrorModal;