import React from "react";

const CardItem = ({ item }) => {
  console.log(item);
  return (
    <div className="px-2 py-2 flex items-center">
      <div className="min-w-[50%] overflow-hidden ">{item.item_name}</div>
      <div>{item.nf_calories}</div>
    </div>
  );
};

// const data = [
//   { item_name: "Italian Pizza", nf_calories: "50" },
//   { item_name: "Cheeze Pizza", nf_calories: "20" },
// ];

const Card = ({ results }) => {
  return (
    <>
      <div className="w-6/12 px-4 py-4 flex flex-col dark:bg-stone-700 rounded-md bg-white">
          <div className="px-2 py-2 flex items-center">
            <div className="min-w-[50%]">label</div>
            <div>Calories</div>
          </div>
          {results?.subItem?.map((item, idx) => (
            <CardItem key={idx} item={item} />
          ))}
        </div>
    </>
  );
};

export default Card;
