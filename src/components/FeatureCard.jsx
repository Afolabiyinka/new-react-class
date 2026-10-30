import React from "react";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="flex  flex-col justify-center items-center text-center border-r p-2">
      <span>{icon}</span>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-md text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;
