import axios from 'axios';

export const checkEmail = (email) => axios.get('/api/api/exists/email/' + email);
export const checkDisplayName = (displayName) => axios.get('/api/auth/exists/display-name/' + displayName);
export const localRegister = ({
  displayName,
  email,
  password,
  initialMoney: { currency, index }
}) => axios.post('/api/auth/register/local', {
  displayName,
  email,
  password,
  initialMoney: { currency, index }
})
export const localLogin = ({email, password}) => axios.post('/api/auth/login', {
  email, password
});
export const socialLogin = ({provider, accessToken}) => axios.post('/api/auth/login/' + provider, {
  accessToken
});
export const socialRegister = ({
  displayName,
  provider,
  accessToken,
  initialMoney: { currency, index } 
}) => axios.post('/api/auth/register/' + provider, {
  displayName,
  accessToken,
  initialMoney: { currency, index }
});
export const checkLoginStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');



// temporary logout caller
window.logout = logout;