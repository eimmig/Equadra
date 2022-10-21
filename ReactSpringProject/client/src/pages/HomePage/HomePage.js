import React, { useEffect, useState } from "react";
import MovimentoService from "../../services/movimento.service";

const HomePage = () => {

    const [data, setData] = useState([]);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = () => {
        MovimentoService.findAllSumMovimentoByContas().then(response => {
            setData(response.data);
            setApiError(null);
        }).catch(error => {
            setApiError(error.response.data.message);
        });
    }


    return (
        <div className="container">
            <h3>Relatório de Totais em Conta</h3>
            <button className="btn btn-primary" onClick={() => window.print()}> Imprimir Relatório</button>

            <table id="table" className="table table-striped">
                <thead>
                    <tr>
                        <th>Conta</th>
                        <th>Valor total a receber</th>
                        <th>Valor em conta</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.conta.banco} - {item.conta.agencia} - {item.conta.numero}</td>
                            <td>{item.valor}</td>
                            <td>{item.valorpago}</td>
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
export default HomePage;