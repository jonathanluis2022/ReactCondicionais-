import React from "react";


function Componete1(props) {

    if (props.nomes) { // si tiver a props nomes / return o nomes 

        return (
            <div>
                <h3> {props.titulo} </h3>
                <p> {props.nomes} </p>
            </div>
        )

    } else {

        return ( //si nao / retunr ###
            <div>
                <h3> {props.titulo} </h3>
                <p> {'###'} </p>
            </div>
        )

    }



}

export default Componete1