import React, { useState } from "react";
import "./battleAnimation.css";

const BattleAnimation = ({ pokeType }) => {

  return (
    <div className="battle">
      {pokeType === "fire" ? (
        <div className="fire-effect"></div>
      ) : pokeType === "water" ? (
        <div className="water-effect"></div>
      ) : (
        <div className="plant-effect"></div>
      )}
    </div>
  );
};

export default BattleAnimation;
