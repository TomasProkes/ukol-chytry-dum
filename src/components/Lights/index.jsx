import React from "react";

import './style.css';

const Lights = ({lights}) => {

    return (
        <div class="lights">
            {
                lights.map(light => <Light light={light} />)
            }
        </div>
    );
}

export default Lights;