import React, { useState } from "react";
import "./Benefits.css";
import FirstTab from "./Tabs/FirstTab/FirstTab";
import SecondTab from "./Tabs/SecondTab/SecondTab";
import ThirdTab from "./Tabs/ThirdTab/ThirdTab";

const Benefits = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    //update the state to tab3
    setActiveTab("tab3");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Benefits</h2>
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Benefits to participants
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Benefits to mentors
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Benefits to Nigeria
        </li>
      </ul>
      <div className="Tabs">
        <div className="outlet">
          {activeTab === "tab1" ? (
            <FirstTab />
          ) : <SecondTab /> && activeTab === "tab3" ? (
            <ThirdTab />
          ) : 
          (
            <SecondTab />
          )}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
