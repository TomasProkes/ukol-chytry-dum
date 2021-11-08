import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import './style.css';
import Blinds from "../Blinds";

const Dashboard = ({data}) => (
    <main className="dashboard">
        <Lights lights={data.lights} />
        <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
        <Blinds state={data.blinds} />
	</main>
);

export default Dashboard;