/* eslint-disable react/prop-types */
import React from "react";

const CustomCard = ({ icon, bgColor, badgeCount, iconColor, title }) => {
  return (
    <div className={`card  shadow-sm bg-white rounded-md w-[180px] h-[160px] flex flex-col justify-center items-center`}>
      {icon && (
        <div className={`h-10 mb-3 w-10 rounded-full ${bgColor} flex flex-col items-center justify-center relative`}>
          {React.cloneElement(icon, { color: iconColor })}
          {badgeCount && (
            <div className="bg-gradient-to-r from-[#FF7714] to-[#FFCF59] w-4 h-4 flex items-center justify-center absolute -top-0 left-[30px] rounded-full">
              <span className="text-[9px] text-white">{badgeCount}</span>
            </div>
          )}
        </div>
      )}
      <p className="font-[500] text-sm text-center px-3">{title}</p>
    </div>
  );
};

export default CustomCard;
