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
        <div className="container">
            <h1 className="text-left" >Sign Up</h1>
            <div className="text-center col-12 mb-3">
                    <Input
                        name="displayname"
                        label="Informe o seu nome"
                        type="text"
                        placeholder="Informe seu nome"
                        value={form.displayname}
                        onChange={onChange}
                        hasError={errors.displayname && true}
                        error={errors.displayname}
                    />

            </div>
            <div className="text-center col-12 mb-3">
                    <Input
                        name="username"
                        label="Informe o usuário"
                        type="text"
                        placeholder="Informe o usuário"
                        value={form.username}
                        onChange={onChange}
                        hasError={errors.username && true}
                        error={errors.username} />
            </div>
            <div className="text-center col-12 mb-3">
                    <Input
                        name="password"
                        label="Informe a sua senha"
                        type="password" 
                        placeholder="Informe sua senha"
                        value={form.password}
                        onChange={onChange}
                        hasError={errors.password && true}
                        error={errors.password}
                    />
            </div>
            <div className="text-center col-12 mb-3">
                    <Input
                        name="passwordRepeat"
                        label="Repita a sua senha"
                        type="password" placeholder="Confirme sua senha"
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
            <div className='text-center'>
                Já possui cadastro? <Link to="/">Login</Link>
            </div>
        </div>
    )
};

export default UserSignupPage;