import React, { useState } from "react";
import input from '../../components/input';
import ButtonWithProgress from '../../components/buttonWithProgress';
import './CadastroUsuario.css';

import AuthService from "../../services/Auth/auth.service";
import { Link, useNavigate } from "react-router-dom";

export const UserSignupPage = (props) => {

    const [form, setForm] = useState({
        displayname: '',
        username: '',
        password: '',
        passwordRepeat: '',
        estado: '',
        cidade: '',
        rua: '',
        numero: '',
        cpf_cnpj: '',
        bairro: ''
    });

    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

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


    const onClickSignup = () => {
        const user = {
            displayname: form.displayname,
            username: form.username,
            password: form.password,
            estado: form.estado,
            cidade: form.cidade,
            rua: form.rua,
            numero: form.numero,
            cpf_cnpj: form.cpf_cnpj,
            bairro: form.bairro
        }
        setPendingApiCall(true);
        AuthService.signup(user).then(response => {
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

    let passwordRepeatError;
    const { password, passwordRepeat } = form;
    if (password || passwordRepeat) {
        passwordRepeatError = password === passwordRepeat ? '' : 'As senhas devem ser iguais';
    }

    return (
        <div class="wrapper">
        <div class="box">
            <form action="">
                <h1>Cadastrar</h1>
                <div class="row">
                    <div class="username col-6">
                        <input type="text" placeholder="Nome"
                        id="nome"/>
                        <i class="icon fa-regular fa-circle-user"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="E-mail"
                        id="username"/>
                        <i class="icon far fa-envelope icon"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="Estado"
                        id="uf"/>
                        <i class="icon fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="Cidade"
                        id="cidade"/>
                        <i class="icon fa-solid fa-city"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="Bairro"
                        id="bairro"/>
                        <i class="icon fa-solid fa-tree-city"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="Rua"
                        id="rua"/>
                        <i class="icon fa-solid fa-road"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="Número"
                        id="numero"/>
                        <i class="icon fa-solid fa-list-ol"></i>
                    </div>
                    <div class="username col-6">
                        <input type="text" placeholder="CPF/CNPJ"
                        id="cpfcnpj"/>
                        <i class="icon fa-regular fa-id-card"></i>
                    </div>
                    <div class="password col-6">
                        <input type="password" placeholder="Senha"
                        id="password"/>
                        <i class="icon fas fa-lock-open"></i>
                    </div>
                    <div class="password col-6">
                        <input type="password" placeholder="Repita a Senha"
                        id="password"/>
                        <i class="icon fas fa-lock-open"></i>
                    </div>
                </div>
            </form>
            <button id="btnLogin" type="submit"  onClick={onClickSignup}>Cadastrar</button>
        </div>
    </div>
    )
};

export default UserSignupPage;