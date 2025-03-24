import React from "react";
import ShopNav from "../components/ecom_Components/ShopNav";
import ProductCard from "../components/ecom_Components/ProductCard";

const products = [
  { id: 1, name: "Men's Jacket", price: 49.99, image: "/images/tshirt1.jpg" },
  { id: 2, name: "Women's Dress", price: 39.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sports Shoes", price: 59.99, image: "https://via.placeholder.com/150" },
];

const Shop = () => {
  return (
    <div>
      <ShopNav />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
