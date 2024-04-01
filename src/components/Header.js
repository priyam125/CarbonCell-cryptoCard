import React from "react";

const Header = ({ date }) => {
  return (
    <header className="bg-gray-800 top-4 p-2 text-white flex justify-between">
      <span>Bitcoin Price</span>
      <span>{date}</span>
    </header>
  );
};

export default Header;
