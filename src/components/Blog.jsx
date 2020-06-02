import React from "react";
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: "flex",
        justifyContent: 'center',
    },
}));
export default function Blog() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography variant="h4">Blog Page</Typography>
        </Container>
    );
}