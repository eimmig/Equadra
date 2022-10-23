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
            {apiError && (
                <div className="alert alert-danger">{apiError}</div>
            )}
        </div>



    );
};
export default HomePage;