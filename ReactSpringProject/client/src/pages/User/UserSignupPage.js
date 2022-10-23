import React, { useState } from "react";
import Input from '../../components/input';
import ButtonWithProgress from '../../components/buttonWithProgress';

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
        cpfCnpj: '',
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
            cpfCnpj: form.cpfCnpj,
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
        passwordRepeatError = passetErrors({});
        setPendingApiCall(false);
        navigate('/');word === passwordRepeat ? '' : 'As senhas devem ser iguais';
    }

    return (
        <div style={{backgroundImage: "url(/background.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "cover", position: "revert",
            height: '100vh', width: '100vw', filter:"revert" }}>
            <div className="container" style={{backgroundColor: "#323232f2"}}>
                <div className="container">
                    <div style={{paddingBottom: "100px"}}>
                        <img src="/logo192.png"/>
                    </div>
                    <div className="text-left col-12 mb-3">
                            <Input
                                name="displayname"
                                type="text"
                                placeholder="Informe seu Nome"
                                value={form.displayname}
                                onChange={onChange}
                                hasError={errors.displayname && true}
                                error={errors.displayname}
                            />

                    </div>
                    <div className="text-center col-12 mb-3">
                            <Input
                                name="username"
                                type="text"
                                placeholder="Informe o seu E-mail"
                                value={form.username}
                                onChange={onChange}
                                hasError={errors.username && true}
                                error={errors.username} />
                    </div>
                    <div className="text-left col-12 mb-3">
                        <Input
                            name="cpfCnpj"
                            type="text"
                            placeholder="Informe seu CPF/CNPJ"
                            value={form.cpfCnpj}
                            onChange={onChange}
                            hasError={errors.cpfCnpj && true}
                            error={errors.cpfCnpj}
                        />
                    </div>
                    <div className="text-left col-12 mb-3">
                        <Input
                            name="estado"
                            type="text"
                            placeholder="Informe seu Estado"
                            value={form.estado}
                            onChange={onChange}
                            hasError={errors.estado && true}
                            error={errors.estado}
                        />

                    </div>
                    <div className="text-left col-12 mb-3">
                        <Input
                            name="cidade"
                            type="text"
                            placeholder="Informe sua Cidade"
                            value={form.cidade}
                            onChange={onChange}
                            hasError={errors.cidade && true}
                            error={errors.cidade}
                        />

                    </div><div className="text-left col-12 mb-3">
                    <Input
                        name="bairro"
                        type="text"
                        placeholder="Informe seu Bairro"
                        value={form.bairro}
                        onChange={onChange}
                        hasError={errors.bairro && true}
                        error={errors.bairro}
                    />

                </div>
                    <div className="text-left col-12 mb-3">
                        <Input
                            name="rua"
                            type="text"
                            placeholder="Informe sua Rua"
                            value={form.rua}
                            onChange={onChange}
                            hasError={errors.rua && true}
                            error={errors.rua}
                        />
                    </div>
                    <div className="text-left col-12 mb-3">
                        <Input
                            name="numero"
                            type="text"
                            placeholder="Informe seu Número"
                            value={form.numero}
                            onChange={onChange}
                            hasError={errors.numero && true}
                            error={errors.numero}
                        />

                    </div>
                    <div className="text-center col-12 mb-3">
                            <Input
                                name="password"
                                type="password"
                                placeholder="Informe sua Senha"
                                value={form.password}
                                onChange={onChange}
                                hasError={errors.password && true}
                                error={errors.password}
                            />
                    </div>
                    <div className="text-center col-12 mb-3">
                            <Input
                                name="passwordRepeat"
                                type="password" placeholder="Confirme sua Senha"
                                value={form.passwordRepeat}
                                onChange={onChange}
                                hasError={passwordRepeatError && true}
                                error={errors.password} />
                    </div>
                    <div className="text-center">
                        <ButtonWithProgress
                            disabled={pendingApiCall || passwordRepeatError ? true : false}
                            onClick={onClickSignup}
                            pendingApiCall={pendingApiCall}
                            text="Cadastrar"
                        />
                    </div>
                    <div className='text-center' style={{color: "white"}}>
                        Já possui cadastro? <Link to="/">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserSignupPage;