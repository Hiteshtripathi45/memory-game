import React from 'react';

const Card = ({ char, onClick }) => {
    return (
        <div className="imagebox">
            <img src={char.images[0]} alt={char.name} onClick={onClick}/>
        </div>
    );
};

export default Card;
