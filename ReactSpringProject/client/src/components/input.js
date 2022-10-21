import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
    let inputClassName = 'form-control';
    if (props.hasError !== undefined) {
        inputClassName += props.hasError ? ' is-invalid' : ' is-valid';
    }

    return (
        <Form.Group>
            {props.label && (<Form.Label>{props.label}</Form.Label>)}
            <Form.Control
                name={props.name}
                className={inputClassName}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {props.hasError && (<Form.Control.Feedback type="invalid"> {props.error}</Form.Control.Feedback>)}
        </Form.Group>
    )
}
Input.defaultProps = {
    onChange: () => { }
}
export default Input;