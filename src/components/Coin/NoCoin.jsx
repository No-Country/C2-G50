import React from "react";
import "./NoCoin.css";

const NoCoin = () => {
  return (
    
    <div className="empty">
      <span className="iconify" data-icon="cib:bitcoin"></span>
      <h2>Look like you portafolio is empty.</h2>
      <p>Addings coins in your portafolio helps you to keep a better track of them</p>
    </div>
  );
};

export default NoCoin;