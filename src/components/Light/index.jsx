import React, { useState } from "react";

import './style.css';

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
        <div onClick="switchLight" class="light">
            <div class="light__icon">
                <img src={`./images/light-${lightState}.svg`} />
            </div>
            <div class="light__name">
                Obývací pokoj
            </div>
        </div>
    );
}

export default Light;