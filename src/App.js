import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CreateLink from './components/Link/CreateLink';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import SearchLinks from './components/Link/SearchLinks';
import LinkList from './components/Link/LinkList';
import LinkDetail from './components/Link/LinkDetail';
import Header from './components/Header'
import useAuth from './components/Auth/useAuth'
import  FirebaseContext  from './firebase/context'
import firebase from './firebase/firebase'
import './App.css';

function App() {
const user = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
      <FirebaseContext.Provider value={{user, firebase}}>
        <div className="app-container">
          <Header />
          <div className="route-container">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateLink} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/search" component={SearchLinks} />
              <Route path="/top" component={LinkList} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/link/:linkId" component={LinkDetail} />
            </Switch>
          </div>
        </div>
        </FirebaseContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
