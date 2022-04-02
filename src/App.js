import React from "react";
import Card from "./Card";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";

const App = () => {
    return (
        <div className="tc">
            <h1  >Metal Dudes</h1>
            <div><SearchBox /></div>
            <CardList robots = {robots} />
        </div>
    )
}

export default App;