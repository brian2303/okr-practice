import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Configuration from './pages/Configuration';
import Dashboard from './pages/Dashboard';
import KRCreate from './pages/KRCreate';
import OKRCreate from './pages/OKRCreate';
import OKRGeneral from './pages/OKRGeneral';
import OKRList from './pages/OKRList';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/okr/list" component={OKRList} />
          <Route exact path="/okr/create" component={OKRCreate} />
          <Route exact path="/kr/create" component={KRCreate} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/general" component={OKRGeneral} />
          <Route exact path="/configuration" component={Configuration} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
