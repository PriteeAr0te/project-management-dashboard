import React, { useState } from 'react'
import ViewToggle from '../components/ToggleView';
import Search from '../components/Search';
import DropdownComponent from '../components/DropdownComponent';
import ProductCard from '../components/ProductCard';
import ProductRow from '../components/ProductRow';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import { useDebounce } from '../hooks/useDebounce';
import { useProductsContext } from '../hooks/useProductsContext';
import EditProductModal from '../components/EditProductModal';
import DeleteProductModal from '../components/DeleteProductModal';

const Dashboard = () => {
  const { products, loading, error, categories } = useProductsContext();
  const [view, setView] = useState("table");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const debouncedSearch = useDebounce(searchValue, 500);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = product.title?.toLowerCase().includes(debouncedSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  })

  if (loading) return <Spinner />
  if (error) return <ErrorPage error={error} />

  return (
    <>
      <EditProductModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} productId={selectedProductId} />
      <DeleteProductModal isDeleteModal={isDeleteModal} setIsDeleteModal={setIsDeleteModal} productId={selectedProductId} />

      <div className='my-6 max-w-7xl sm:mx-auto mx-2 px-3'>
        <div className='flex sm:justify-between items-center sm:flex-row flex-col gap-x-2 gap-y-4'>
          <h1 className='text-4xl text-foreground/80 font-semibold'>Dashboard</h1>
          <ViewToggle value={view} onChange={(value) => setView(value)} />
        </div>

        <div className='flex justify-center md:justify-end items-center flex-col sm:flex-row gap-y-4 lg:p-6 p-3 gap-x-4 mt-2'>
          <Search
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <DropdownComponent
            options={[
              { value: 'all', label: 'All' },
              ...categories.map((category) => ({
                value: category,
                label: category.charAt(0).toUpperCase() + category.slice(1),
              }))
            ]}
            selectedValue={selectedCategory}
            onChange={(val) => setSelectedCategory(val)}
          />
        </div>

        <div className='w-full border border-[#D0D5DD] rounded-lg p-4 mt-4'>
          {view === 'table' ? (
            <div className="overflow-x-auto max-w-full scrollable-container">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#D0D5DD]">
                    <th className="text-left p-3 font-medium">Image</th>
                    <th className="text-left p-3 font-medium">Title</th>
                    <th className="text-left p-3 font-medium">Description</th>
                    <th className="text-left p-3 font-medium">Category</th>
                    <th className="text-left p-3 font-medium">Ratings</th>
                    <th className="text-left p-3 font-medium">Price</th>
                    <th className="text-left p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((item) => (
                    <ProductRow item={item} key={item.id} setIsEditModalOpen={setIsEditModalOpen} setIsDeleteModal={setIsDeleteModal} setSelectedProductId={setSelectedProductId} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} product={item} setIsEditModalOpen={setIsEditModalOpen} setIsDeleteModal={setIsDeleteModal} setSelectedProductId={setSelectedProductId} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Dashboard