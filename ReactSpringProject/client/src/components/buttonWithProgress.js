import React from "react"
import { Button } from "react-bootstrap";

const ButtonWithProgress =  (props) => {

    return (
        <Button 
         variant={props.variant || 'primary' }

        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.pendingApiCall && (
            <div className="spinner-border text-light spinner-border-sm mr-sm-1"
                role="status">
                <span className="visually-hidden">Aguarde...</span>
            </div>
        )}
        {props.text}
    </Button >
    );

}

export default ButtonWithProgress;
