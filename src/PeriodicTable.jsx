import React from "react";
import "./PeriodicTable.css";
import data from "./data.json";

const colorMap = {
  "diatomic nonmetal": "#bbff99",
  "noble gas": "#adffce",
  "alkali metal": "#ddcae3",
  "alkaline earth metal": "#c9cfe3",
  metalloid: "#d4bdef",
  "polyatomic nonmetal": "#99cdea",
  "post-transition metal": "#f7cb8d",
  "transition metal": "#f9e58a",
  lanthanide: "#CFE4F2",
  actinide: "#75edfa",
  "unknown, probably transition metal": "#ffffff",
  "unknown, probably post-transition metal": "#ffffff",
  "unknown, probably metalloid": "#ffffff",
  "unknown, predicted to be noble gas": "#ffffff",
};

function PeriodicTable() {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          key={element.name}
          style={{
            gridColumn: element.xpos,
            gridRow: element.ypos,
            backgroundColor: colorMap[element.category],
          }}
          className="element"
        >
          <p className="el-number">{element.number}</p>
          <strong className="el-symbol">{element.symbol}</strong>
          <p className="el-name">{element.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PeriodicTable;
