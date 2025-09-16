import React from 'react'
import ProductForm from '../components/ProductForm'
import { useProductsContext } from '../hooks/useProductsContext'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { addProduct } = useProductsContext();
  const navigate = useNavigate();

  const handleAddProduct = async (formData) => {
    const newProduct = await addProduct(formData);
    toast.success("Product added successfully");
    navigate(`/product-details/${newProduct.id}`);
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='mt-4 w-full sm:mx-auto mx-2 px-3 flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-foreground/80 text-center font-semibold mb-5'>Add Product</h1>
        <ProductForm onSubmit={handleAddProduct} />
      </div>
    </div>
  )
}

export default AddProduct