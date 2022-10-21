import axios from "axios";

const save = (movimento) => {
  return axios.post("/movimento", movimento, {headers:getAuthHeader()});
};

const findAll = () => {
  return axios.get("/movimento", {headers:getAuthHeader()});
}

const findOne = (idMovimento) => {
  return axios.get(`/movimento/${idMovimento}` , {headers:getAuthHeader()});
}

const remove = (idMovimento) => {
  return axios.delete(`/movimento/${idMovimento}` , {headers:getAuthHeader()});
}

const findAllSumMovimentoByContas = () => {
  return axios.get("/movimento/sumMovimentoByContas", {headers:getAuthHeader()});
}

const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
      return {Authorization: 'Bearer ' + token};
  } else {
      return {};
  }
}
const MovimentoService = {
  save,
  findAll,
  findOne,
  remove,
  findAllSumMovimentoByContas,
};


export default MovimentoService;
