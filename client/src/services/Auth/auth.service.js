import axios from "axios";

const signup = (user) => {
  return axios.post("/api/users", user);
};

const newQuadra = (quadra) => {
  return axios.post("/api/quadra", quadra);
};


const login = (user) => {
  return axios
    .post("/api/login/valida-login", user)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("userId", JSON.stringify(response.data.id));
        localStorage.setItem("token", JSON.stringify(response.data));
        localStorage.setItem("username", JSON.stringify(response.data.username));
      }
      return response.data;
    })
    .catch(() => {
      return false;
    });
};

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
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