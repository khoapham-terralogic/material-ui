import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Box, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem 4rem",
        width: "100%",
        marginTop: "1rem",
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    title: {
        width: "100%"
    },
    textField: {
        minWidth: "28rem",
    }
}));

const MyForm = () => {
    const classes = useStyles();
    return (
        <>
            <form align="center" className={classes.root} noValidate>
                <Typography className={classes.title} component="div" variant="h3">
                    <Box textAlign="center" fontWeight={500}>
                        Subscribe to our newsletter
                </Box>
                </Typography>

                <TextField className={classes.textField} id="outlined-basic" label="Name" variant="outlined" />
                <TextField className={classes.textField} id="outlined-basic" label="Email" variant="outlined" />
            </form>
            <Button type="submit" variant="contained" color="primary">Send</Button>
        </>
    );
}

export default MyForm;
