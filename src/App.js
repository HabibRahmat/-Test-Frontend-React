import React from 'react';
import './App.less';
import './styles/index.less';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Router from './components/routes';
const App = () => (
  <>
    <BrowserRouter>
    <Switch>
      {Router.map((route, i)=>{
        return <Route key={i} component={route.component} path={route.path} exact />
      })}
      <Route path='*' component={() => {
        return <div>404</div>
      }}/>
    </Switch>
    </BrowserRouter>
  </>
);

export default App;