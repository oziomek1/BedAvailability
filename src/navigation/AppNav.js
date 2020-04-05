import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import './AppNav.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const LazyHomePage = React.lazy(() => import('../components/home/Home'));
const LazyInfoPage = React.lazy(() => import('../components/info/Info'));

class AppNav extends Component {
    render() {
        const Main = (() => {
            return (
                <LazyHomePage/>
            );
        });
        return (
            <Container className="main-container" maxWidth="lg">
                <Header title="BedAvail"/>
                <main>
                    <React.Suspense fallback={<CircularProgress color="secondary" />}>
                        <Route exact path='/' component={Main} />
                        <Route path='/info' component={LazyInfoPage}/>
                    </React.Suspense>
                </main>
                <Footer/>
            </Container>
        )
    }
}

export default AppNav;