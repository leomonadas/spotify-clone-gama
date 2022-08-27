import "./style.css";
import React from "react"
import Plans from "../Plan";

export default function PlanItem() {
    return (
      <div className="plan-row">
        <Plans vantagemUm="Vantagem 1" vantagemDois="Vantagem 2"/>
        <Plans vantagemUm="Vantagem 1" vantagemDois="Vantagem 2" vantagemTres="Vantagem 3" vantagemUquatro="Vantagem 4"  vantagemCinco="Vantagem 5"/>
        <Plans vantagemUm="Vantagem 1" vantagemDois="Vantagem 2" vantagemTres="Vantagem 3"/>
        <Plans vantagemUm="Vantagem 1" vantagemDois="Vantagem 2" vantagemTres="Vantagem 3" vantagemUquatro="Vantagem 4"/>
      </div>
       
    )
};
