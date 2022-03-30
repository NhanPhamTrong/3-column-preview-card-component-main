import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="logo" />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button className="learn-more-btn" type="button" aria-label="Learn More">Learn More</button>
        </div>
    )
}

export default Card;