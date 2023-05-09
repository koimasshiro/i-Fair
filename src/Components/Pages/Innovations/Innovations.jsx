import React from "react";
import './Innovations.css'
import Navbar from "../../Navbar/Navbar";
import { InnovationData } from "../../../Data/InnovationData/InnovationData";

const Innovations = () => {
  return (
    <div>
      <div className="innovations-header">
        <Navbar/>
        <h2>Innovations</h2>
      </div>
      <div>
        {InnovationData.map((innovation, id)=>{
          return(
            <div key={id}>
              <h1>{innovation.name}</h1>
              <h4>{innovation.innovation}</h4>
              <p>{innovation.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Innovations;
