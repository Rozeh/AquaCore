import React, { Component } from 'react';
import { Footer } from 'components';
// import redux dependencies
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';

class FooterContainer extends Component {
  handleLoginButtonClick = () => {
    const { BaseActions, AuthActions } = this.props;
    BaseActions.setScreenMaskVisibility(true);
    AuthActions.toggleLoginModal();
    AuthActions.setModalMode('login');
  }

  render() {
    const { handleLoginButtonClick } = this;
    const { user, solid } = this.props;

    return (
      <Footer 
        onLoginButtonClick={handleLoginButtonClick}
        user={user}
        solid={solid}
      />
    );
  }
}

export default connect(
    (state) => ({
      user: state.user.get('user')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(FooterContainer);
