import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";



const Digimons = () => {
    const [digimons, setDigimons] = useState([]);


    useEffect(() => {
        axios
            .get("https://digimon-api.vercel.app/api/digimon")
            .then((response) => {
                console.log(response.data);
                setDigimons(response.data.slice(0, 10)); // first 10 digimon
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {digimons.map((digimon, index) => (
                    <li key={index}>
                        <strong>{digimon.name}</strong> — {digimon.level}
                        <br />
                        <img src={digimon.img} alt={digimon.name} width="100" />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Digimons;
