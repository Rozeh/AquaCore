import axios from 'axios';

export const checkEmail = (email) => axios.get('/api/v1.0/exists/email/' + email);
export const checkDisplayName = (displayName) => axios.get('/api/auth/exists/display-name/' + displayName);
export const localRegister = 
  ({ displayName, email, password }) => axios.post('/api/v1.0/auth/register/local', {
displayName, email, password })
export const localLogin = ({email, password}) => axios.post('/api/v1.0/auth/login', { email, password });
export const checkLoginStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
// temporary logout caller
window.logout = logout;