import { Edit, Star, Trash2 } from "lucide-react";
import { stars, truncate } from "../lib/product";

const ProductRow = ({ item, setIsEditModalOpen, setIsDeleteModal, setSelectedProductId }) => {
  const ratingValue = typeof item.rating === "object" ? item.rating.rate : item.rating || 0;
  const ratingCount = typeof item.rating === "object" ? item.rating.count : 0;


  return (
    <tr key={item.id} className="border-b border-[#D0D5DD] hover:bg-muted/50 place-content-center cursor-pointer" onClick={() => window.location.href = `/product-details/${item.id}`}>
      <td className="p-3 min-w-[80px]">
        <img
          src={item.image}
          alt={item.title}
          width={60}
          height={60}
          className="object-contain rounded w-[60px] h-[60px]"
        />
      </td>

      <td className="p-3 font-medium text-gray-900 min-w-[200px]">
        {truncate(item.title, 30)}
      </td>
      <td className="p-3 text-muted-foreground min-w-[200px]">
        {truncate(item.description, 30)}
      </td>

      <td className="p-3 text-muted-foreground min-w-[200px]">
        {truncate(item.category, 30)}
      </td>

      <td className="p-3 h-full items-center gap-1 min-w-[150px]">
        <span className="flex items-center gap-1">
          {stars.map((star) => (
            <Star
              key={star}
              size={16}
              className={
                star <= Math.round(ratingValue)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </span>
        <span className="ml-2 text-sm text-gray-600">
          ({ratingCount})
        </span>
      </td>
      <td className="p-3 font-semibold text-primary min-w-[100px]">${item.price}</td>
      <td className="p-3">
        <span className="flex gap-2 items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditModalOpen(true);
              setSelectedProductId(item.id);
            }}
            className="bg-primary cursor-pointer text-white rounded-lg px-4 py-2 hover:bg-dark transition-all duration-300"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDeleteModal(true);
              setSelectedProductId(item.id);
            }}
            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded-lg px-4 py-2 transition-all duration-300"
          >
            <Trash2 size={16} />
          </button>
        </span>
      </td>
    </tr>
  );
};

export default ProductRow;
