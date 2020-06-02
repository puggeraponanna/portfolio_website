import React from "react";
import { Container, Typography } from "@material-ui/core"
import MyAvatar from "./MyAvatar"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: "flex",
        justifyContent: 'center',
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <MyAvatar />
            <Typography variant="h3">PUGGERA PONANNA</Typography>
        </Container>
    );
}