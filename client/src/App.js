import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container } from '@material-ui/core'

import LandingPage from './components/LandingPage/LandingPage'
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import PitchAnalysis from './components/PitchAnalysis/PitchAnalysis';
import InterviewAnalysis from './components/InterviewAnalysis/InterviewAnalysis';
import useStyles from './styles';
const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Container maxWidth="xl" className={classes.root}>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/pitchAnalysis" exact component={PitchAnalysis} />
                    <Route path="/interviewAnalysis" exact component={InterviewAnalysis} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;