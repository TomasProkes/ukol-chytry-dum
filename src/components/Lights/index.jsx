import React from "react";
import Light from "../Light";
import './style.css';

const Lights = ({lights}) => {

    return (
        <div className="lights">
            {
                lights.map(({name, state}) => <Light key={name} name={name} state={state} />)
            }
        </div>
    );
}

export default Lights;