import axios from "axios";

const findQuadraById = (idQuadra) => {
  return axios.get(`/api/quadra/get-quadra/${idQuadra}`, {headers:getAuthHeader()});
}

const remove = (idQuadra) => {
  debugger;
  return axios.delete(`/api/quadra/${idQuadra}` , {headers:getAuthHeader()});
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
  findQuadraById,
  remove
};


export default HomeService;