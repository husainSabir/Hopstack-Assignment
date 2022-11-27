import React from "react";

const CardItem = ({ item }) => {
  return (
    <div className="px-2 py-2 flex items-center">
      <div className="min-w-[50%] overflow-hidden ">{item.item_name}</div>
      <div>{item.nf_calories}</div>
    </div>
  );
};

// const data = [
//   { label: "Italian Pizza", calories: "50" },
//   { label: "Cheeze Pizza", calories: "20" },
// ];

const Card = ({ results }) => {
  return (
    <>
      {results.length > 0 && (
        <div className="w-6/12 px-4 py-4 flex flex-col dark:bg-slate-400 rounded-md bg-white">
          <div className="px-2 py-2 flex items-center">
            <div className="min-w-[50%]">label</div>
            <div>Calories</div>
          </div>
          {results.map((item, idx) => (
            <CardItem key={idx} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Card;