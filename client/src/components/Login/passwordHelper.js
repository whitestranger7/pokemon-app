import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "0",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function PasswordHelper() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const btnStyles = {
        border: "0",
        backgroundColor: "inherit",
        textDecoration: "underline",
        color: "blue"
    }

    return (
        <div>
            <a type="button" onClick={handleOpen} style={btnStyles}>
                Каким должен быть пароль
            </a>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Пароль должен:</h2>
                        <p id="transition-modal-description">
                            <p>- Иметь длину более 8 символов</p>
                            <p>- Иметь длину более 8 символов</p>
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
