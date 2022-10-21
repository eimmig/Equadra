import axios from "axios";

const save = (conta) => {
  return axios.post("/conta", conta, {headers:getAuthHeader()});
};

const findAll = () => {
  return axios.get("/conta", {headers:getAuthHeader()});
}

const findOne = (idConta) => {
  return axios.get(`/conta/${idConta}` , {headers:getAuthHeader()});
}

const remove = (idConta) => {
  return axios.delete(`/conta/${idConta}` , {headers:getAuthHeader()});
}


const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
      return {Authorization: 'Bearer ' + token};
  } else {
      return {};
  }
}
const ContaService = {
  save,
  findAll,
  findOne,
  remove,
};


export default ContaService;
