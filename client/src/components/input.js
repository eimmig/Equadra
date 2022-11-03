import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
    let inputClassName = '';
    if (props.hasError !== undefined) {
        inputClassName += props.hasError ? ' is-invalid letrao-grandaoCadastro' : ' is-valid';
    }

    return (
        <Form.Group>
            {props.label && (<Form.Label>{props.label}</Form.Label>)}

            <Form.Control
                name={props.name}
                className={inputClassName  + props.className}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
                onChange={props.onChange}
            />
            {!!props.hasError && (<span className="letrao-grandaoCadastro" type="invalid"> {props.error}</span>)}
        </Form.Group>
    )
}
Input.defaultProps = {
    onChange: () => { }
}
export default Input;