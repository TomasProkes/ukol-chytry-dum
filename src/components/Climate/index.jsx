import React, { useState } from "react";
import './style.css';
import temp from './temp.svg';

const Climate = ({temperature, humidity}) => {

    const [houseTemp, setHouseTemp] = useState(temperature);

    const changeTemp = (e) => setHouseTemp(houseTemp => houseTemp + (e.target.innerText === '+' ? 1 : -1));

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{houseTemp}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button onClick={changeTemp} className="cli-button">+</button>
                <button onClick={changeTemp} className="cli-button">-</button>
            </div>
        </div>
    );
}

export default Climate;