import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function GameOverDialog(props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>You have {props.msg}</DialogTitle>
      <DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={props.reset}>Play Again</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default GameOverDialog;
