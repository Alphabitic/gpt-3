import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Navbar from './components/Navbar/Navbar';
import AllPosts from './components/AllPosts/AllPosts';
import Dashboard from './components/Dashboard/Dashboard';
import MorningCheck from './components/MorningCheck/MorningCheck';
import Ticket from './components/Home/Ticket';
import Chat from './components/Chat';




const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
<Navbar />
      <Switch>
        <Route exact path="/" render={() => (
          user ? <Redirect to="/posts/search" /> : <Redirect to="/auth" />
        )} />
        <Route path="/morning" exact component={MorningCheck} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/ticket" exact component={Ticket} />
        <Route path="/process" exact component={Dashboard} />
        <Route path="/all" exact component={Chat} />
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/dash" exact component={Dashboard} />
        <Route path={['/creators/:name', '/tags/:name']} render={(props) => (
          <CreatorOrTag {...props} someProp="someValue" />
        )} />
      </Switch>
    
    </BrowserRouter>
  );
};


export default App;
