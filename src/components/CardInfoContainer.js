import React from "react";
import Card from "./Card";

const CardInfoContainer = ({ cardData }) => {
  return (
    <div className="flex flex-col p-2 w-full">
      <div className="bg-gray-800 p-1 rounded-sm mb-1">
        Bitcoin Price in different currencies
      </div>
      <div className="flex flex-wrap w-full [&>*:nth-child(1)]:w-full gap-[2%] text-yellow-200 font-semibold">
        {cardData?.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CardInfoContainer;
