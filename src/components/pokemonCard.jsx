import React, { useState } from "react";
import HealthBar from "./healthBar";

const PokemonCard = ({ reverse, pokemon, percentEnergy, attackName }) => {
  return (
    <>
      {!reverse ? (
        <div className="flex justify-between border-2 border-gray-500 rounded-lg p-4 bg-red-100 h-80">
          <div className="w-full mr-4 p-8 text-left">
            <p className="text-2xl font-bold my-6">{pokemon?.name}</p>
            <HealthBar
              sx={{
                backgroundColor: "red",
                height: "20px",
                borderRadius: "20px",
              }}
              color="success"
              value={percentEnergy}
            />
            {percentEnergy !== 100 && (
              <p className="mt-6 font-bold">
                Last Attack received: {attackName}
              </p>
            )}
          </div>
          <img width={300} src={pokemon?.image} alt={pokemon?.name} />
        </div>
      ) : (
        <div className="flex justify-between border-2 border-gray-500 rounded-lg p-4 bg-blue-100 h-80">
          <img width={300} src={pokemon?.image} alt={pokemon?.name} />
          <div className="w-full ml-4 p-8 text-left">
            <p className="text-2xl font-bold my-6">{pokemon?.name}</p>
            <HealthBar
              sx={{
                backgroundColor: "red",
                height: "20px",
                borderRadius: "20px",
              }}
              color="success"
              value={percentEnergy}
            />
            {percentEnergy !== 100 && (
              <p className="mt-6 font-bold">
                Last Attack received: {attackName}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
