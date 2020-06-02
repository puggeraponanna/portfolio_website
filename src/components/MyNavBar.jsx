import React from "react"
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MyColors from "./colors"
import { Link as RouterLink } from 'react-router-dom';

const colors = MyColors();

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: colors.blue,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MyNavBar() {
    const classes = useStyles();
    return (<AppBar position="static" className={classes.root}>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                PUGGERA PONANNA
            </Typography>
            <Button color="inherit" component={RouterLink} to="/about">About</Button>
            <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
            <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>

        </Toolbar>
    </AppBar>
    );
}