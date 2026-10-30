import { Heart } from "lucide-react";
import React from "react";

const ProductCard = ({ image, title, price, discountPrice }) => {
  return (
    <div className="p-2 h-full bg-gray-200 rounded-xl flex flex-col justify-center items-center cursor-pointer">
      <div>
        <img
          src={image}
          alt={title}
          className="h-[300px] w-[300px] rounded-xl"
        />
      </div>
      <div className="w-full mt-3 flex flex-col">
        <h1 className="text-xl font-bold">{title}</h1>
        <span className="flex gap-10 justify-between p-2">
          <p className="text-xl">${price}</p>
          <Heart size={35} />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
