import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import WordConstruct from './pages/WordConstruct';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import {getWords, getWord} from './api/api';
import SuccesPage from './pages/SuccesPage'

/*getWords().then((words)=>{
 console.log(words);
 if (words.length){
 getWord(words[0]._id).then((word)=>console.log(word));
 }
 });*/

class App extends React.Component {
    static propTypes = {};

    render() {
        return <Router>
            <div>
                <Switch>
                    <Route exact path="/admin" component={AdminPanel}/>
                    <Route path="/admin/login" component={AdminLogin}/>
                    <Route exact path="/" component={WordConstruct}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/succes" component={SuccesPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    }
}

export default App;