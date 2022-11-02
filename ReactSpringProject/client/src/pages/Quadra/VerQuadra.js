import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';
import './Quadra.css';
import QuadraService from "../../services/Auth/quadraService";
import { useParams } from "react-router-dom";   


export const Quadra = () => {

    const [data, setData] = useState([]);

    const id = useParams();

    const [tipoEsporte, setTipoEsporte] = useState([]);

    useEffect(() => {
        loadData();
    }, []);
    
    const loadData = () => {
        QuadraService.findQuadraById(id.id).then(response => {
            setData(response.data);
            if(response.data.tipoEsporte === "F"){
                setTipoEsporte("Futebol");
            }else if(response.data.tipoEsporte === "V"){
                setTipoEsporte("Vôlei");
            }else{
                setTipoEsporte("Basquete");
            }
        }).catch((error) => {

        });
    }

    const onClickDelete = (id) => {
        debugger;
        QuadraService.remove(id)
    }

    return (
        <div className="pageCadQuadra">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
            <div className="containerCadQuadra">
                <div className="formimageCadQuadra">
                    <img src="https://www.mixadesivos.com.br/simulador/f0935e4cd5920aa6c7c996a5ee53a70f/1_17_130919034828_adesivo-de-parede----basquetebol-modelo-2.png" alt=""/>
                </div>
                <div className="formCadQuadra">
                    <form action="#">
                        <div className="formheaderCadQuadra">
                            <div className="titleCadQuadra">
                                <h1>Como chegar?</h1>
                            </div>
                        </div>

                        {data.userId ?
                            <div className="inputgroupCadQuadra">
                                <div className="inputboxCadQuadra">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Informações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nome da Quadra</td>
                                            <td>{data.nomeQuadra}</td>
                                        </tr>
                                        <tr>
                                            <td>Cidade</td>
                                            <td>{data.userId.cidade}</td>
                                        </tr>
                                        <tr>
                                            <td>Bairro</td>
                                            <td>{data.userId.bairro}</td>
                                        </tr>
                                        <tr>
                                            <td>Rua</td>
                                            <td>{data.userId.rua}</td>
                                        </tr>
                                        <tr>
                                            <td>Número</td>
                                            <td>{data.userId.numero}</td>
                                        </tr>
                                        <tr>
                                            <td>Tipo do Esporte</td>
                                            <td>{tipoEsporte}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
                            </div>
                        : ""}
                        {(data.userId && data.userId.id == localStorage.userId) ?
                        <div className="deletebuttonCadQuadra">
                            <button onClick={() => onClickDelete(data.id)}><a href="/">Excluir Quadra</a> </button>
                        </div>
                        : ""}
                        <div className="sairCadQuadra">
                            <a href="/">Sair</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Quadra;