import React, { useState } from "react";
import Input from '../../components/input.js';
import ButtonWithProgress from '../../components/buttonWithProgress';
import './CadastroUsuario.css';
import {toast} from 'react-toastify';

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
        <>
            <div className="wrapperCadastro bodyCadastro">
                <div className="boxCadastro">
                    <form action="">
                        <h1>Cadastrar</h1>
                        <div className="row">
                            <div className="usernameCadastro col-6">
                                <Input
                                        name="displayname"
                                        type="text"
                                        placeholder="Nome"
                                        value={form.displayname}
                                        onChange={onChange}
                                        hasError={errors.displayname && true}
                                        error={errors.displayname}
                                    />
                                <i className="icon fa-regular fa-circle-user"></i>
                            </div>
                            <div className="usernameCadastro col-6">
                            <Input
                                        name="username"
                                        type="text"
                                        placeholder="E-mail"
                                        value={form.username}
                                        onChange={onChange}
                                        hasError={errors.username && true}
                                        error={errors.username} />
                                <i className="icon far fa-envelope icon"></i>
                            </div>
                            <div className="usernameCadastro col-6">
                            <Input
                                    name="cpf_cnpj"
                                    type="text"
                                    placeholder="CPF/CNPJ"
                                    value={form.cpf_cnpj}
                                    onChange={onChange}
                                    hasError={errors.cpf_cnpj && true}
                                    error={errors.cpf_cnpj}
                                />
                            </div>
                            <div className="usernameCadastro col-6">
                            <Input
                                    name="estado"
                                    type="text"
                                    placeholder="Estado"
                                    value={form.estado}
                                    onChange={onChange}
                                    maxLength="2"
                                    className="toUpperCaseCadastro"
                                    hasError={errors.estado && true}
                                    error={errors.estado}
                                />
                                <i className="icon fa-solid fa-city"></i>
                            </div>
                            <div className="text-left col-6 mb-3">
                                <Input
                                    name="cidade"
                                    type="text"
                                    placeholder="Cidade"
                                    value={form.cidade}
                                    onChange={onChange}
                                    hasError={errors.cidade && true}
                                    error={errors.cidade}
                                />

                            </div>
                            <div className="text-left col-6 mb-3">
                            <Input
                                name="bairro"
                                type="text"
                                placeholder="Bairro"
                                value={form.bairro}
                                onChange={onChange}
                                hasError={errors.bairro && true}
                                error={errors.bairro}
                            />

                            </div>
                            <div className="text-left col-6 mb-3">
                                <Input
                                    name="rua"
                                    type="text"
                                    placeholder="Rua"
                                    value={form.rua}
                                    onChange={onChange}
                                    hasError={errors.rua && true}
                                    error={errors.rua}
                                />
                            </div>
                            <div className="text-left col-6 mb-3">
                                <Input
                                    name="numero"
                                    type="text"
                                    placeholder="Número"
                                    value={form.numero}
                                    onChange={onChange}
                                    hasError={errors.numero && true}
                                    error={errors.numero}
                                />
                            </div>
                            <div className="text-center col-6 mb-3">
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Senha"
                                        value={form.password}
                                        onChange={onChange}
                                        hasError={errors.password && true}
                                        error={errors.password}
                                    />
                            </div>
                            <div className="text-center col-6 mb-3">
                                    <Input
                                        name="passwordRepeat"
                                        type="password" placeholder="Confirme sua Senha"
                                        value={form.passwordRepeat}
                                        onChange={onChange}
                                        hasError={passwordRepeatError && true}
                                        error={errors.password} />
                            </div>
                        </div>          
                    </form>
                    <button id="btnLogin" type="submit"  onClick={onClickSignup}>Cadastrar</button>
                </div>
            </div>
        </>
    )
};

export default UserSignupPage;