import React, { useState } from "react";
import Tab from "./Tab";
import "./App.css";
 
const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);
 
    const handleTabClick = (index) => {
        setActiveTab(index + 1);
    };
 
    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                    />
                ))}
            </div>
            <div className="tab-content">
                {activeTab === 1 && <div>Japan</div>}
                {activeTab === 2 && <div>Netherlands</div>}
                {activeTab === 3 && <div>Georgia</div>}
            </div>
        </div>
    );
};
 
export default Tabs;