import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovimentoService from "../../services/movimento.service";

const MovimentoPageList = () => {

    const [data, setData] = useState([]);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        MovimentoService.findAll().then(response => {
            setData(response.data);
            setApiError(null);
        }).catch((error) => {
            setApiError(error.response.data.message);
        });
    }

    const onClickDelete = (id) => {
        MovimentoService.remove(id).then(response => {
            loadData();
            setApiError(null);
        }).catch((error) => {
            setApiError(error.response.data.message);
        });
    }

    const getParsedDate = (strDate) => {
        if(strDate === null || strDate === ""){
            return "";
        }
        var date = new Date(strDate);
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
    
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date =  dd + "/" + mm + "/" + yyyy;
        return date.toString();
    }

    return (
        <div className="container">
            <h1 className="tex-center">Lista de Movimentos</h1>
            <Link to="/movimentos/new" className="btn btn-success">
                Cadastrar
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Código</th>
                        <th>Valor</th>
                        <th>Descricao</th>
                        <th>Data de Pagamento</th>
                        <th>Data de Vencimento</th>
                        <th>Valor Pago</th>
                        <th>Valor</th>
                        <th>Conta</th>
                        <th>Tipo de Movimento</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td className="col-2">
                                <Link className="col-6 btn btn-sm btn-primary" to={`/movimentos/${item.id}`} >Editar</Link>
                                <button className="col-6 btn btn-sm btn-danger" onClick={() => onClickDelete(item.id)}>Excluir</button>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.valor}</td>
                            <td>{item.descricao}</td>
                            <td>{getParsedDate(item.datapagamento)}</td>
                            <td>{getParsedDate(item.datavencimento)}</td>
                            <td>{item.valorpago}</td>
                            <td>{item.valor}</td>
                            <td>{item.conta.banco} - {item.conta.agencia} - {item.conta.numero}</td>
                            <td>{item.movimentotipo}</td>
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
export default MovimentoPageList;