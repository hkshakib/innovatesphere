import React from "react";

const Card = ({ Name, Photo }) => {
  return (
    <div className="flex flex-col h-[250px] w-[250px] gap-10 items-center pt-8 rounded-xl bg-[#BFCFE7]">
      <img
        className="flex p-2 lg:p-0 h-[100px] w-[100px] fit-contains rounded-full"
        src={Photo}
        alt="Avatar"
      />
      <div className="text-[20px]">{Name}</div>
    </div>
  );
};

export default Card;
