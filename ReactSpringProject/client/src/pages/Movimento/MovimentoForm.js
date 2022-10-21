import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonWithProgress from "../../components/buttonWithProgress";
import Input from "../../components/input";
import ContaService from "../../services/conta.service";
import MovimentoService from "../../services/movimento.service";

const MovimentoPageForm = () => {

    const [form, setForm] = useState({
        id: null,
        conta: undefined,
        descricao: '',
        datavencimento: new Date().toISOString().substring(0, 10),
        datapagamento: new Date().toISOString().substring(0, 10),
        valorpago:  0,
        valor: 0,
        movimentotipo: 'RECEITA',
        contadestino: undefined,
    });


    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState();
    const [contas, setContas] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            MovimentoService.findOne(id).then(response => {
                if (response.data) {
                    setForm({ ...response.data });
                    setApiError();
                } else {
                    setApiError('Movimento não encontrado');
                }
            }).catch((apiError) => {
                setApiError(apiError.response.data.message);
            }
            );
        }
        ContaService.findAll()
            .then((response) => {
                setContas(response.data);
                if (!form.conta) {
                    setForm((previousForm) => {
                        return {
                            ...previousForm,
                            conta: response.data[0],
                        }
                    });
                }
                setApiError();
            })
            .catch(() => {
                setApiError('Falha ao carregar categorias.');
            });
    }, [id]);

    const onChange = (event) => {
        const { value, name } = event.target;

        if (name == 'movimentotipo') {
            setForm((previousForm) => {
                return {
                    ...previousForm,
                    [name]: value,
                    "contadestino": undefined,
                }
            });
        } else {
            setForm((previousForm) => {
                return {
                    ...previousForm,
                    [name]: value,
                };
            });
        }
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

        MovimentoService.save(form).then(() => {
            setPendingApiCall(false);
            navigate("/movimentos");
        }).catch((apiError) => {
            setPendingApiCall(false);
            if (apiError.response.data.validationErrors) {
                setErrors(apiError.response.data.validationErrors);
            } else {
                setApiError('Ocorreu um erro ao salvar o movimento');
            }
        });
    };

    return (
        <div className="container">
            <h1 className="text-center">Cadastro de Movimentos</h1>
            <div className="col-12 mb-3">
                <label>Conta</label>
                <select
                    className="form-control"
                    name="conta"
                    value={form.conta}
                    onChange={onChange}
                >
                    {contas.map((conta) => (
                        <option key={conta.id} value={conta.id}>
                            {conta.banco} - {conta.agencia} -  {conta.numero}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col-12 row mb-3">
                <div className="col-6">
                    <label>Data de Pagamento</label>
                    <input type="date"
                        name="datapagamento"
                        value={form.datapagamento}
                        onChange={onChange}
                        rows="5"
                        className="form-control"
                    />
                    {errors.datapagamento && (
                        <span className="invalid-feedback d-block">{errors.datapagamento}</span>
                    )}
                </div>

                <div className="col-6">
                    <label>Data de Vencimento</label>
                    <input type="date"
                        name="datavencimento"
                        value={form.datavencimento}
                        onChange={onChange}
                        rows="5"
                        className="form-control"
                    />
                    {errors.datavencimento && (
                        <span className="invalid-feedback d-block">{errors.datavencimento}</span>
                    )}
                </div>
            </div>


            <div className="col-12 row mb-3">
                <div className="col-6">
                    <Input
                        label="Valor"
                        name="valor"
                        type="number"
                        placeholder="valor"
                        value={form.valor}
                        onChange={onChange}
                        hasError={errors.valor && true}
                        error={errors.valor}
                    />
                </div>
                <div className="col-6">
                    <Input
                        label="Valor Pago"
                        name="valorpago"
                        type="number"
                        placeholder="valorpago"
                        value={form.valorpago}
                        onChange={onChange}
                        hasError={errors.valorpago && true}
                        error={errors.valorpago}
                    />
                </div>
            </div>
            <div className="col-12 mb-3">
                <label>Descrição</label>
                <textarea
                    name="descricao"
                    placeholder="Informe a descricao"
                    value={form.descricao}
                    onChange={onChange}
                    rows="5"
                    className="form-control"
                />
                {errors.descricao && (
                    <span className="invalid-feedback d-block">{errors.descricao}</span>
                )}
            </div>
            <div className="col-12 mb-3">
                <label>Tipo de Movimento</label>
                <select className="form-control" name="movimentotipo" value={form.movimentotipo} onChange={onChange}>
                    <option value="RECEITA">Receita</option>
                    <option value="DESPESA">Despesa</option>
                    <option value="TRANSFERENCIA">Transferência</option>
                </select>

                {errors.movimentotipo && (<div className="alert alert-danger">{errors.movimentotipo}</div>)}

            </div>

            {form.movimentotipo == 'TRANSFERENCIA' && (
                <div className="col-12 mb-3">
                    <label>Conta de Destino</label>
                    <select
                        className="form-control"
                        name="contadestino"
                        value={form.contadestino}
                        onChange={onChange}
                    >
                        {contas.map((conta) => (
                            <option key={conta.id} value={conta.id}>
                                {conta.banco} - {conta.agencia} -  {conta.numero}
                            </option>
                        ))}
                    </select>
                </div>
            )}

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
                <Link className="btn btn-secondary" to="/movimentos">Voltar</Link>
            </div>


            {apiError && (
                <div className="alert alert-danger">{apiError}</div>
            )}
        </div>
    );

};
export default MovimentoPageForm;