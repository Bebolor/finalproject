import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { defaultTheme, GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login/LeftContainer';
import EmailSignUp from './pages/Login/SingUp/EmailForm';
import CongratsMessage from './pages/Login/SingUp/CongratsDiv';
import VerificationForm from './pages/Login/SingUp/Verification'
import Tournament from './pages/Tournament';
import { PageContainer, PageContent } from './styles/page-layout';
import Profile from "./pages/Profile/index";


ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
      <PageContainer>
            <PageContent>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/tournament/:id" component={Tournament} />
              <Route exact path="/Login" component={ Login } />
              <Route exact path="/reg" component={ EmailSignUp } />
              <Route exact path="/regmessage" component={ CongratsMessage } />
              <Route exact path="/verification" component={ VerificationForm} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
            </PageContent>
        </PageContainer>
    </Router>
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

