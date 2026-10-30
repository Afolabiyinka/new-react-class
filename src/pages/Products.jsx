import React from "react";
import shirtImage from "../assets/model_lady.jpg";
import ProductCard from "../components/ProductCard";
import { products } from "../libs/mockProducts";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-4 p-10 gap-10">
      {products.map((item) => (
        <ProductCard
          image={item.image}
          title={item.title}
          price={item.price}
          discountPrice={item.discountPrice}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
