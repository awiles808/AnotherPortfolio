import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";



const useStyles = makeStyles(theme => ({
    form: {
        top: "45%",
        left: "50%",
        transform: "Translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "#96CDD4"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#96CDD4",
            },
            "&:hover fieldset": {
                borderColor: "#96CDD4"
            }
        },
        "& .Mui-focused fieldset": {
            borderColor: "#96CDD4"
        }
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles()

    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography
                        variant="h5"
                        style={{
                            color: "tomato",
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        Contact Me
                 </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />

                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Company Name"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>Contact Me
                 </Button>

                </Box>
            </Grid>

        </Box>
    );
};

export default Contacts
