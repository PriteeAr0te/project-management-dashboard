import React from "react";
import { stars, truncate } from "../lib/product";
import { Edit, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, setIsEditModalOpen, setIsDeleteModal }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="border border-[#D0D5DD] rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-[150px] h-[150px]"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-foreground">
          {truncate(product.title, 30)}
        </h2>

        <p className="text-sm text-muted-foreground mt-2">
          {truncate(product.description, 60)}
        </p>

        <p className="text-primary font-medium mt-3">${product.price}</p>

        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex items-center gap-1 mt-2">
            {stars.map((star) => (
              <Star
                key={star}
                size={16}
                className={
                  star <= Math.round(product.rating?.rate)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              ({product.rating?.count || 0})
            </span>
          </div>
          <span className="flex gap-2 items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsEditModalOpen(true);
              }}
              className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-dark transition-all duration-300"
            >
              <Edit size={16} />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDeleteModal(true);
              }}
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-2 transition-all duration-300"
            >
              <Trash2 size={16} />
            </button>
          </span>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;
