import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth2';


// action types
const TOGGLE_LOGIN_MODAL = 'auth/TOGGLE_LOGIN_MODAL';
const SET_MODAL_MODE = 'auth/SET_MODAL_MODE';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const SET_ERROR = 'auth/SET_ERROR';
const LOGIN  = 'auth/LOGIN';

// action creator
export const toggleLoginModal = createAction(TOGGLE_LOGIN_MODAL);
export const setModalMode = createAction(SET_MODAL_MODE); // (mode)
export const changeInput = createAction(CHANGE_INPUT); // ({name, value})
export const setError = createAction(SET_ERROR);  // ({ email, password }) [nullable]
export const Login = createAction(LOGIN, AuthAPI.Login); // ({username, password})

// initial state
const initialState = Map({
  modal: Map({
    visible: false,
    mode: 'login'
  }),
  form: Map({
    username: '',
    password: ''
  }),
  error: null,
  loginResult: null,
  socialInfo: null,
  redirectToRegister: false
});

// reducer
export default handleActions({
    [TOGGLE_LOGIN_MODAL]: (state, action) => {
      const visible = state.getIn(['modal', 'visible']);
      if(visible) {
        return state.setIn(['modal', 'visible'], false);
      }
      return initialState.setIn(['modal', 'visible'], true);
    },
    [SET_MODAL_MODE]: (state, action) => {
      return state.setIn(['modal', 'mode'], action.payload)
                  .set('form', initialState.get('form'))
                  .set('error', null);
    },
    [CHANGE_INPUT]: (state, action) => {
      const { name, value } = action.payload;
      return state.setIn(['form', name], value);
    },
    [SET_ERROR]: (state, action) => {
      return state.set('error', fromJS(action.payload));
    },
    ...pender({
      type: LOGIN,
      onSuccess: (state, action) => {
        const { data: loginResult } = action.payload;
        return state.set('loginResult', loginResult);
      },
      onFailure: (state, action) => {
        return state.set('error', fromJS({
          localLogin: ['잘못된 ID 정보입니다.']
        }))
      }
    })
}, initialState);