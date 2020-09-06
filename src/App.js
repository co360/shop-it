import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';

import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Browse from './containers/Browse/Browse';
import Product from './containers/Product/Product';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/auth" exact component={Auth} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
