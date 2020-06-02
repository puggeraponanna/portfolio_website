import React from "react";
import { Container, Paper } from "@material-ui/core"
import MyNavBar from "./components/MyNavBar"
import About from "./components/About"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import { MemoryRouter as Router } from 'react-router';
import { Route } from 'react-router-dom';
import Footer from "./components/Footer"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    root: {
        spacing:5,
    },
    paper: {
        flexGrow: "1",
    }

}));


function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Router>
                <MyNavBar />
                <Paper className={classes.paper}>
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/blog" component={Blog}/>
                    <Footer />
                </Paper>
            </Router>
        </Container>
    )
}


export default App;