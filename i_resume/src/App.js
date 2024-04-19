import React from "react";
import Tabs from "./Tabs";
 

const App = () => {
    const tabData = [
        { label: "About Me"},
        { label: "Contact Me"},
        { label: "Learn More"},
    ];

    return(
        <div className="App">
            <Tabs tabs={tabData} /> 
        </div>
    );
}

export default App;