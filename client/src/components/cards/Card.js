import React from 'react'
import './Card.css';

function Card(props) {
    return (
        <div className="card-container" onClick={() => alert("Hello there!")}>
            <div className="image-container">
                <img src={ props.imgUrl } alt="" />
            </div>
            <div className="card-title">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Card
