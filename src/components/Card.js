import React from "react";

const Card = ({ card, index }) => {
  return (
    <div
      key={index}
      className="md:w-[49%] w-full h-20 bg-[#8884d8] p-2 flex flex-col rounded-sm shadow-lg mb-2"
    >
      <div className="line-clamp-1">
        {card.description}, <span>{card.code}</span>
      </div>
      <div className="space-x-2 line-clamp-1">
        <span dangerouslySetInnerHTML={{ __html: card.symbol }}></span>
        <span>{card.rate}</span>
      </div>
    </div>
  );
};

export default Card;
