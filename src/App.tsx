import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacs';
import Photos from './components/Photos/Photos';
import Posts from './components/Posts/PostsContainer';

// Styles
import './App.css';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Switch>
          <div className="app">
            <Sidebar />
            <Route path="/main" render={() => <Main />} />
            <Route path="/contacts" render={() => <Contacts />} />
            <Route path="/photos" render={() => <Photos />} />
            <Route path="/posts" render={() => <Posts />} />
            <Route path="*" render={() => <Redirect to="/main" />} />
          </div>
        </Switch>
      </Provider>
    </HashRouter>
  );
};

export default App;
