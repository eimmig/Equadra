import axios from "axios";

const signup = (user) => {
  return axios.post("/api/users", user);
};

const newQuadra = (quadra, user) => {
  quadra.user = user;
  return axios.post("/api/quadra", quadra);
};


const login = (user) => {
  return axios
    .post("/api/login", user)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data;
    })
    .catch(() => {
      
      localStorage.setItem("token", JSON.stringify({'token':'aad'}));
      return "ASDASF";
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