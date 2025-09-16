import React, { useState, useEffect } from 'react'
import InputComponent from './InputComponent';
import TextareaComponent from './TextAreaComponent';

const ProductForm = ({ initialValues, onSubmit, width }) => {
  const [formData, setFormData] = useState({
    title: initialValues?.title || "",
    price: initialValues?.price || "",
    description: initialValues?.description || "",
    category: initialValues?.category || "",
    image: initialValues?.image || "",
  })

  useEffect(() => {
    if (initialValues) {
      setFormData({
        title: initialValues.title || "",
        price: initialValues.price || "",
        description: initialValues.description || "",
        category: initialValues.category || "",
        image: initialValues.image || "",
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <div className={`mb-10 shadow-lg h-full px-6 py-6 border border-[#D0D5DD] rounded-lg ${width === "full" ? "w-full" : "w-full sm:max-w-[50%]"}`}>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <InputComponent
          id="title"
          type="text"
          label="Title"
          name="title"
          placeholder="Product Title"
          required={true}
          value={formData.title}
          onChange={handleChange}
        />

        <InputComponent
          id="price"
          label="Price"
          type="number"
          name="price"
          placeholder="Product Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <TextareaComponent
          id="description"
          label="Description"
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <InputComponent
          id="category"
          label="Category"
          name="category"
          placeholder="Product Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <InputComponent
          id="image"
          label="Image URL"
          name="image"
          placeholder="Product Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="mt-3 px-4 py-2 cursor-pointer rounded-lg bg-primary focus:bg-dark hover:bg-dark text-white"
        >
          {initialValues ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}

export default ProductForm