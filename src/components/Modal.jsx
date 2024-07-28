import React from "react";
import "./Modal.css";
import LottieAnimation from "./LottieAnimation";
import imag from "./img/icons8-отмена.svg"

export default function Modal({onClick}) {
    const styleButton = {
        width: "35px",
        height: "35px",
        position: "absolute",
        right: 5,
        top: 5
    };

    return (
        <div className="modal-overly">
            <div className="contant">
                <LottieAnimation />
                <button onClick={onClick} style={styleButton}>
                <img className="hover:hover:-translate-y-1 transition duration-300" src={imag} alt="close"/>
                </button>
            </div>
        </div>
    );
}