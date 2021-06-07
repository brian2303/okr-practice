import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import OkrList from './pages/OkrList'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/okr/list" component={OkrList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
