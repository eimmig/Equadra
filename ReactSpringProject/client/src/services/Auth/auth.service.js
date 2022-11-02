import axios from "axios";
import {toast} from 'react-toastify';

const signup = (user) => {
  return axios.post("/api/users", user);
};

const newQuadra = (quadra) => {
  return axios.post("/api/quadra", quadra);
};


const login = (user) => {
  debugger;
  return axios
    .post("/api/login/valida-login", user)
    .then((response) => {
      debugger;
      if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch(() => {
      return false;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return ''; //JSON.parse(localStorage.getItem("user"));
};

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
  newQuadra,
  isAuthenticated,
};

export default AuthService;