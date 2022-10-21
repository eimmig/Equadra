import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContaService from "../../services/conta.service";

const ContaPageList = () => {

    const [data, setData] = useState([]);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {

        loadData();
        
    }, []);

    const loadData = () => {
        ContaService.findAll().then(response => {
            setData(response.data);
            setApiError(null);
        }).catch(error => {
            setApiError(error.response.data.message);
        });
    }

    const onClickDelete = (id) => {
        ContaService.remove(id).then(response => {
            loadData();
            setApiError(null);
        }).catch((error) => {
            setApiError(error.response.data.message);
        });
    }

    return (
        <div className="container">
            <h1 className="text-center">Lista de Contas</h1>


            <div className="text-left">
                <Link to="/contas/new" className="btn btn-success">
                    Cadastrar
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>Código</th>
                        <th>Numero</th>
                        <th>Agencia</th>
                        <th>Banco</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td className="col-2">
                                <Link   className="col-6 btn btn-sm btn-primary" to={`/contas/${item.id}`} >Editar</Link>
                                <button className="col-6 btn btn-sm btn-danger" onClick={() => onClickDelete(item.id)}>Excluir</button>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.numero}</td>
                            <td>{item.agencia}</td>
                            <td>{item.banco}</td>
                            <td>{item.tipoconta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {apiError && (
                    <div className="alert alert-danger">{apiError}</div>
                )}
        </div>
    );

};
export default ContaPageList;