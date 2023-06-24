/* eslint-disable react/prop-types */
import React from "react";

const SmallCard = ({ icon, bgColor, iconColor, title }) => {
  return (
    <div
      className={`card shadow-sm bg-white rounded-md w-[160px] h-[130px] flex flex-col items-center justify-center`}
    >
      <div className={`h-16 w-16 mb-3 rounded-full ${bgColor} flex items-center justify-center`}>
        {React.cloneElement(icon, { color: iconColor })}
      </div>
      <p className="font-bold text-sm sm:text-sm">{title}</p>
    </div>
  );
};

export default SmallCard;
