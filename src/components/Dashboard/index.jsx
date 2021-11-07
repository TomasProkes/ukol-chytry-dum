import React from "react";
import Lights from "../Lights";

import './style.css';

const Dashboard = ({data}) => (
    <main class="dashboard">
        <Lights lights={data.lights} />

	</main>
);

export default Dashboard;