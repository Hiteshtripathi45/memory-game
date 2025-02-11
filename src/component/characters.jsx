import React, { useEffect, useState } from 'react';
import Scoreboard from './scoreboard';
import Card from './card';
import characterImage from "../assets/loading.gif"; 

const Characters = () => {
    const [image, setImage] = useState([]);
    const [divid, setDivid] = useState([]);
    const [yourscore, setYourScore] = useState(0);
    const [bestscore, setBestScore] = useState(0);

    useEffect(() => {
        fetch("https://dattebayo-api.onrender.com/characters?page=1&limit=16")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.characters);
                setImage(data.characters || []);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    function handleScore(id) {
        if (divid.includes(id)) {
            setYourScore(0);
            setDivid([]);
        } else {
            setYourScore(prevScore => {
                const newScore = prevScore + 1;
                if (newScore > bestscore) {
                    setBestScore(newScore);
                }
                return newScore;
            });

            setDivid(prevDivid => [...prevDivid, id]);
        }

        setImage(prevImage => shuffleArray([...prevImage]));
    }

    return (
        <div className='top'>
            <nav><h1 className='title'>MEMORY-GAME</h1> <Scoreboard yourscore={yourscore} bestscore={bestscore} /></nav>
        <div className="full">
            {!image.length ? (
                <h1><img src={characterImage} alt="loading..." /></h1>
            ) : (
                image.map((char) =>
                    char.id === 515 ? null : <Card key={char.id} char={char} onClick={() => handleScore(char.id)} />
                )
            )}
        </div>
        </div>
    );
};

export default Characters;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
