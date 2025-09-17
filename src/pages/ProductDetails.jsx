import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, updateProduct } = useProductsContext();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    if (found) {
      setProduct(found);
    }
  }, [id, products]);

  const getCurrentRating = () => {
    if (!product?.rating) return 0;
    if (typeof product.rating === "object") {
      return product.rating.rate;
    }
    return product.rating;
  };

  const handleRating = (value) => {
    if (!product) return;

    let updatedRating;
    if (!product.rating) {
      updatedRating = { rate: value, count: 1 };
    } else if (typeof product.rating === "object") {
      updatedRating = { ...product.rating, rate: value };
    } else {
      updatedRating = { rate: value, count: 1 };
    }

    const updated = { ...product, rating: updatedRating };
    updateProduct(product.id, updated);
    setProduct(updated);
    toast.success(`You rated this product ${value}⭐`);
  };


  if (!product) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-600 text-lg">Product not found</p>
      </div>
    );
  }

  const currentRating = getCurrentRating();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 text-sm cursor-pointer font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] w-full object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="mt-2 text-gray-600">{product.description}</p>

            <div className="mt-4">
              <span className="text-lg font-semibold text-indigo-600">
                ₹ {product.price}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                ({product.category})
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Rate this product:
              </h3>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`text-2xl ${star <= currentRating
                      ? "text-yellow-400"
                      : "text-gray-300"
                      } hover:scale-110 transition-transform`}
                  >
                    ★
                  </button>
                ))}
              </div>
              {currentRating > 0 && (
                <p className="mt-2 text-sm text-gray-600">
                  Current rating:{" "}
                  <span className="font-semibold">{currentRating} / 5</span>
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => toast.success("Product added to cart")}
              className="flex-1 cursor-pointer py-3 bg-primary text-white rounded-lg shadow hover:bg-dark">
              Add to Cart
            </button>
            <button
              className="flex-1 cursor-pointer py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;