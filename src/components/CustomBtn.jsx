import React from "react";

const CustomBtn = ({ text, leftIcon, rightIcon }) => {
  return (
    <button className="p-3 mt-5 px-16 shadow cursor-pointer bg-white hover:bg-transparent text-black hover:border hover:text-white transition-all duration-500 hover:scale-105 rounded-full flex gap-3">
      <span>{leftIcon && leftIcon}</span>
      <span>{text}</span>
      <span>{rightIcon && rightIcon}</span>
    </button>
  );
};

export default CustomBtn;
