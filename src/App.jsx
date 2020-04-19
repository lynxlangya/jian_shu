import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './layout/header';
import { GlobalStyle } from './style/global.js';
import { GlobalIconfont } from "./statics/iconfont/iconfont";
import Home from './views/home'
import Detail from './views/detail/loadable';
import Login from './views/login'

function App() {
  return (
    <>
      <GlobalIconfont />
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' exact component={Detail} />
          <Login path='/login' exact component={Login} />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
