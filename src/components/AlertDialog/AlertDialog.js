import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from '@mui/material/Stack';

export default function AlertDialog(props) {
  const { deleteData, deleteOpen, setDeleteOpen } = props;
  const handleClose = () => {
    console.log("ibside ")
    setDeleteOpen(false);
  };

  const handleCancelClick = () => {
    setDeleteOpen(false);
  }

  const handleDeleteClick = () => {
    deleteData();
    setDeleteOpen(false);
  }

  return (
    <div>
      <Dialog
        open={deleteOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{textAlign: "center"}}
      >
        <DialogTitle id="alert-dialog-title" style={{ color: "#863654", textAlign: "center"}}>
              {"You are going to delete selected tests"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "#863654" }}
          >
            By pressing "delete", you will remove those selected tests. Are you
            sure you wish to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" style={{ backgroundColor: "#863654", borderRadius: "25px"}} onClick={handleCancelClick}>Cancel</Button>
          <Button variant="contained" style={{ backgroundColor: "#863654", borderRadius: "25px"}} onClick={handleDeleteClick} autoFocus>
            Delete
          </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
