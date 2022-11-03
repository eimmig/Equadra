import React, { useState } from "react";
import Input from '../../components/input.js';
import AuthService from "../../services/Auth/auth.service";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quadra.css';

export const Quadra = () => {
    var tipoEsporte = "";

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

    const clickEsporte = () => {
        
        if(document.getElementById('basquete').checked) {
           tipoEsporte = "B";
        }
        else if(document.getElementById('futebol').checked) {
            tipoEsporte = "F";
        }
        else if(document.getElementById('volei').checked) {
            tipoEsporte = "V";
        }
        else {
            tipoEsporte = "";
        }
    }

    const [form, setForm] = useState({
        nomeQuadra: '',
        tipoEsporte: '',
        user: ''
    });
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [errors, setErrors] = useState({});
    
    const onClickSaveQuadra = () => {
        if(tipoEsporte === ""){
            toast.error('Tipo de Esporte não selecionado', {autoClose:5000})
            return;
        }else if(form.nomeQuadra === ""){
            toast.error('Nome da quadra não informado', {autoClose:5000})
            return;
        }else{
            debugger;
            const quadra = {
                nomeQuadra: form.nomeQuadra,
                tipoEsporte: tipoEsporte,
                userId: {id:localStorage.userId},
            }
            setPendingApiCall(true);
            AuthService.newQuadra(quadra).then(response => {
                debugger;
                if(response == false){
                    toast.error('Erro ao cadastrar quadra.', {autoClose:5000})
                }else{
                    toast.success('Quadra cadastrada com sucesso.', {autoClose:5000})
                }
                setPendingApiCall(false);
            }).catch( (apiError) => {
        
                    if (apiError.response.data && apiError.response.data.validationErrors) {
                        setErrors(apiError.response.data.validationErrors);
                    }
                    setPendingApiCall(false);
                    
            });
        }
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
                                <h1>Cadastre uma Quadra</h1>
                            </div>
                        </div>

                        <div className="inputgroupCadQuadra">
                            <div className="inputboxCadQuadra">
                                <label htmlFor="firstname">Nome da Quadra</label>
                                <Input id="nomeQuadra" type="text" name="nomeQuadra" placeholder="Digite o nome da quadra" required
                                       value={form.nomeQuadra}
                                       onChange={onChange}
                                       hasError={errors.nomeQuadra && true}
                                       error={errors.nomeQuadra}/>
                            </div>
                        </div>

                        <div className="genderinputsCadQuadra">
                            <div className="gender-title">
                                <h6>Tipo de esporte</h6>
                            </div>

                            <div className="gendergroupCadQuadra">
                                <div className="genderinputCadQuadra">
                                    <input id="basquete" type="radio" name="gender"
                                        onClick={clickEsporte}/>
                                    <label htmlFor="B">Basquete</label>
                                </div>

                                <div className="genderinputCadQuadra">
                                    <input id="futebol" type="radio" name="gender"
                                        onClick={clickEsporte}/>
                                    <label htmlFor="F">Futebol</label>
                                </div>

                                <div className="genderinputCadQuadra">
                                    <input id="volei" type="radio" name="gender"
                                        onClick={clickEsporte}/>
                                    <label htmlFor="V">Volei</label>
                                </div>
                            </div>
                        </div>

                        <div className="continuebuttonCadQuadra">
                            <button onClick={onClickSaveQuadra}><a href="">Cadastrar</a> </button>
                        </div>
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