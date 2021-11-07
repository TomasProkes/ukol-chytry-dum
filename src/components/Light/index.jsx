import React, { useState } from "react";

import './style.css';

import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

const Light = ({name, state}) => {

    const [lightState, setLightState] = useState(state);

    const switchLight = () => {
        if (lightState === 'on') {
            setLightState('off');
        } else {
            setLightState('on');
        }
    }

    return (
        <div onClick={switchLight} className="light">
            <div className="light__icon">
                <img src={(lightState === 'on' ? lightOn : lightOff)} />
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    );
}

export default Light;