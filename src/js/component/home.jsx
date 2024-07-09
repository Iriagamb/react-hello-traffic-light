import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [selectColor, setSelecteColor] = useState("red");
	return (
		<div 
    
     className="Traffic-light">
      <div 
      onClick ={() => setSelecteColor ("red")} 
      className={"light red " + (selectColor === "red" ? "glow": "")}></div>

      <div 
      onClick ={() => setSelecteColor ("yellow")} 
      className={"light yellow " + (selectColor === "yellow" ? "glow": "")}></div>

      <div 
      onClick ={() => setSelecteColor ("green")} 
      className={"light green " + (selectColor === "green" ? "glow": "")}></div>
      
    </div>
  );
	
};

export default Home;

