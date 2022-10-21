import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonWithProgress from "../../components/buttonWithProgress";
import Input from "../../components/input";
import ContaService from "../../services/conta.service";

const ContaPageForm = () => {

    const [form, setForm] = useState({
        id: null,
        numero: '',
        agencia: '',
        banco: '',
        tipoconta: 'CC',
        user: null,
    });


    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        if(id){
            ContaService.findOne(id).then(response => {
                if(response.data){
                    setForm({...response.data});
                    setForm({user: null});
                    setApiError();
                } else {
                    setApiError('Conta não encontrada');
                }
            }).catch( (apiError) => {
                setApiError(apiError.response.data.message);
            }
            );
        }
    }, [id]);

    const onChange = (event) => {
        const { value, name } = event.target;

        setForm((previousForm) => {
            return {
                ...previousForm,
                [name]: value,
            };
        });

        setErrors((previousErrors) => {
            return {
                ...previousErrors,
                [name]: undefined,
            };
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setPendingApiCall(true);

        if(form.tipoconta == null || form.tipoconta === ''){
            setForm({tipoconta: 'CC'});
        }   

        ContaService.save(form).then(() => {
            setErrors({});
            setPendingApiCall(false);
            navigate("/contas");
        }).catch((apiError) => {
            setPendingApiCall(false);
            if (apiError.response.data && apiError.response.data.validationErrors) {
                console.log(apiError.response.data.validationErrors)
                setErrors(apiError.response.data.validationErrors);
            } else {
                setApiError('Ocorreu um erro ao salvar a conta');
            }
            });
    };

    return (
        <div className="container">
            <h1 className="text-center">Cadastro de Contas</h1>
            <div className="col-12 mb-3">
                <Input
                    label="Numero"
                    name="numero"
                    placeholder="Numero da Conta"
                    value={form.numero}
                    onChange={onChange}
                    hasError={errors.numero && true}
                    error={errors.numero}
                />
            </div>
            <div className="col-12 mb-3">
                <Input
                    label="Agencia"
                    name="agencia"
                    placeholder="Agencia"
                    value={form.agencia}
                    onChange={onChange}
                    hasError={errors.agencia && true}
                    error={errors.agencia}
                />
            </div>
            <div className="col-12 mb-3">
                <Input
                    label="Banco"
                    name="banco"
                    placeholder="Banco"
                    value={form.banco}
                    onChange={onChange}
                    hasError={errors.banco && true}
                    error={errors.banco}
                />
            </div>
            <div className="col-12 mb-3">
                <label>Tipo de Conta</label>
                <select className="form-control" name="tipoconta" value={form.tipoconta} onChange={onChange}>
                    <option value="CC">Corrente</option>
                    <option value="CP">Poupança</option>
                    <option value="CARTAO">Cartão</option>
                </select>

                {errors.tipoconta && ( <div className="alert alert-danger">{errors.tipoconta}</div>)}

            </div>
            <div className="col-12 mb-3">
                <ButtonWithProgress
                    text="Salvar"
                    variant="success"
                    disabled={pendingApiCall}
                    onClick={onSubmit}
                    pendingApiCall={pendingApiCall}
                />


            </div>
            <div className="col-12 mb-3">
                <Link className="btn btn-secondary" to="/contas">Voltar</Link>
            </div>

            
            {apiError && (
                    <div className="alert alert-danger">{apiError}</div>
                )}      
        </div>
    );

};
export default ContaPageForm;