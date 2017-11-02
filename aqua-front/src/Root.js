import React from 'react';
import App from 'components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;