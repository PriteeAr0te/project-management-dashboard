import React, { useEffect, useState } from "react";
import API from "../lib/api";
import { ProductContext } from "./ProductContext";

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const stored = localStorage.getItem("products");
            if (stored) {
                setProducts(JSON.parse(stored));
                return;
            }
            setLoading(true);
            try {
                const res = await API.get("/products");
                setProducts(res.data);
                const uniqueCategories = [
                    ...new Set(res.data.map((item) => item.category.toLowerCase())),
                ];
                setCategories(uniqueCategories);
                localStorage.setItem("products", JSON.stringify(res.data));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const addProduct = async (product) => {
        try {
            const newProduct = {
                id: Date.now(),
                ...product,
                rating: { rate: 0, count: 0 },
            };
            setProducts([newProduct, ...products]);
            localStorage.setItem("products", JSON.stringify([newProduct, ...products]));
            return newProduct;
        } catch (error) {
            setError(error.message);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const updated = products.filter((p) => p.id !== id);
            setProducts(updated);
            localStorage.setItem("products", JSON.stringify(updated));
            return updated;
        } catch (error) {
            setError(error.message);
        }
    }

    const updateProduct = async (id, updatedProduct) => {
        try {
            const updated = products.map((p) =>
                p.id === id ? { ...p, ...updatedProduct } : p
            );
            setProducts(updated);
            localStorage.setItem("products", JSON.stringify(updated));
            return updatedProduct;
        } catch (error) {
            setError(error.message);
        }
    };


    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem("products", JSON.stringify(products));
            setCategories([
                ...new Set(products.map((item) => item.category.toLowerCase())),
            ]);
        }
    }, [products]);

    return (
        <ProductContext.Provider
            value={{ products, setProducts, loading, error, categories, deleteProduct, updateProduct, addProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};