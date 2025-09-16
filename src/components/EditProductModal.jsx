import React, { useEffect, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import ProductForm from './ProductForm'
import { useProductsContext } from '../hooks/useProductsContext';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const EditProductModal = ({ isOpen, setIsOpen, productId }) => {
    const { products, updateProduct } = useProductsContext();
    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        const product = products.find((p) => p.id === Number(productId));
        if (product) {
            setInitialValues(product);
        } else {
            setInitialValues(null);
        }
    }, [productId, products]);

    const handleEditProduct = async (formData) => {
        updateProduct(Number(productId), formData);
        setIsOpen(false);
        toast.success("Product updated successfully");
    }

    // if (!isOpen) {
    //     return null;
    // }

    // if (!initialValues) {
    //     return <Spinner />;
    // }

    console.log(initialValues)

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full h-full sm:max-w-xl rounded-xl bg-white p-6 shadow-lg min-h-[100vh-30px] scrollbar overflow-y-scroll" id="style-7">
                    <DialogTitle className="text-lg font-bold flex justify-between items-center text-gray-800 mb-4" >
                        <span>Edit Product</span>
                        <div className="cursor-pointer text-gray-800 p-1 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </div>
                    </DialogTitle>

                    <div className='w-full'>
                        <ProductForm initialValues={initialValues} onSubmit={handleEditProduct} width="full" />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default EditProductModal