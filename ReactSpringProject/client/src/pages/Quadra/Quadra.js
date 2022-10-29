import React, { useState } from "react";
import Input from '../../components/input.js';
import AuthService from "../../services/Auth/auth.service";
import { Link, useNavigate } from "react-router-dom";
import './Quadra.css';

export const Quadra = () => {

    const [form, setForm] = useState({
        nomeQuadra: '',
        tipoEsporte: '',
        user: ''
    });
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const onClickSaveQuadra = () => {
        const quadra = {
            nomeQuadra: form.nomeQuadra,
            tipoEsporte: form.tipoEsporte,
            user: "",
        }
        setPendingApiCall(true);
        AuthService.newQuadra(quadra, quadra).then(response => {
            setErrors({});
            setPendingApiCall(false);
            navigate('/');
        }).catch( (apiError) => {
    
                if (apiError.response.data && apiError.response.data.validationErrors) {
                    setErrors(apiError.response.data.validationErrors);
                }
                setPendingApiCall(false);
                
        });
      }

    return (
        <div className="pageCadQuadra">
            <div className="containerCadQuadra">
                <div className="formimageCadQuadra">
                    <img src="" alt=""/>
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
                                <label for="firstname">Nome da Quadra</label>
                                <Input id="firstname" type="text" name="firstname" placeholder="Digite o nome da quadra" required/>
                            </div>
                        </div>

                        <div className="genderinputsCadQuadra">
                            <div className="gender-title">
                                <h6>Tipo de esporte</h6>
                            </div>

                            <div className="gendergroupCadQuadra">
                                <div className="genderinputCadQuadra">
                                    <input id="Basquete" type="radio" name="gender"/>
                                    <label for="B">Basquete</label>
                                </div>

                                <div className="genderinputCadQuadra">
                                    <input id="Futebol" type="radio" name="gender"/>
                                    <label for="F">Futebol</label>
                                </div>

                                <div className="genderinputCadQuadra">
                                    <input id="Volei" type="radio" name="gender"/>
                                    <label for="V">Volei</label>
                                </div>
                            </div>
                        </div>

                        <div className="continuebuttonCadQuadra">
                            <button onClick={onClickSaveQuadra} type="submit"><a href="#">Cadastrar</a> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Quadra;