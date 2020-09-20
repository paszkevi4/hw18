import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/ContactsContainer';
import Photos from './components/Photos/Photos';
import Posts from './components/Posts/PostsContainer';

// Styles
import './App.css';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="app">
          <Sidebar />
          <Switch>
            <Route path="/main" render={() => <Main />} />
            <Route path="/contacts" render={() => <Contacts />} />
            <Route path="/photos" render={() => <Photos />} />
            <Route path="/posts" render={() => <Posts />} />
            <Route path="*" render={() => <Redirect to="/main" />} />
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
};

export default App;
