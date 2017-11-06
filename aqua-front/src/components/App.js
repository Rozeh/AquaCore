import React, { Component } from 'react';

import { HomePage, AicPage, LezhinPage ,OperPage, StarPage, TradePage, RegisterPage } from 'components';
import { Route } from 'react-router-dom';
import { 
  ScreenMaskContainer, 
  LoginModalContainer,
  UserLoader,
  Core
 } from 'containers';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path ="/" component={LezhinPage}/>
        <Route path="/aic" component={AicPage} />        
        <Route path="/oper" component={OperPage} />        
        <Route path="/star" component={StarPage} />        
        <ScreenMaskContainer/>
        <LoginModalContainer/>
        <UserLoader/>
        <Core/>
      </div>
    );
  }
}

export default App;