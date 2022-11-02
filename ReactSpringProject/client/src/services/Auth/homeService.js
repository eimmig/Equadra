import axios from "axios";

const findAll = () => {
  return axios.get("/api/quadra", {headers:getAuthHeader()});
}

const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
      return {Authorization: 'Bearer ' + token};
  } else {
      return {};
  }
}
const HomeService = {
  findAll
};


export default HomeService;