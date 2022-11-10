import React from "react";
import data from "../../data/houseData.json";
import House from "./House";

const Houses = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-10">
      {data.houses.map((house) => (
        <House house={house} />
      ))}
    </div>
  );
};

export default Houses;
