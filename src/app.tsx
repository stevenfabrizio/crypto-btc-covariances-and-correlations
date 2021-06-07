import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import About from './components/about';
import MainPage from './components/mainpage';
import Nav from './components/nav';
import FAQ from './components/faq'
import Footer from './components/footer'

const App = () => {

    return(
    <HashRouter>
        
        <Nav/>

        <Switch>

            <Route exact path='https://guitarisprettierthanpiano.github.io/crypto-btc-covariances-and-correlations'
            component = {MainPage}/>

            <Route path='/faq'
            component = {FAQ}/>

            <Route path ='/about' 
            component={About}/>

        </Switch>

        <Footer />
        
    </HashRouter>
    );
};
export default App;