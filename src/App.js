import React from "react";
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"

import {makeStyles} from "@material-ui/styles"

import MyAvatar from "./components/MyAvatar"

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems:'center',
        display:"flex",
        justifyContent:'center',
        width:1024,
    },
    paper:{
        margin:'auto'
    }

  }));


function App() {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="lg">
            <Paper >
            <MyAvatar />
            <h1>Puggera Ponanna</h1>
            </Paper>
       </Container>
    )
}


export default App;