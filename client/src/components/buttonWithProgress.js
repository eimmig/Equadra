import React from "react"
import { Button } from "react-bootstrap";

const ButtonWithProgress =  (props) => {

    return (
        <Button  style={{backgroundColor: "#2cde00", borderColor: "grey", width: "125px", boxShadow: "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)", transitionDuration: "0.04s"}}
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
