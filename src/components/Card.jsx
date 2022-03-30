import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="logo" />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;