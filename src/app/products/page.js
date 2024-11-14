"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to store the list of unique categories
  const [categories, setCategories] = useState([]);
  // State to store the selected category from the dropdown
  const [selectedCategory, setSelectedCategory] = useState("");

  // useEffect hook to fetch products data when the component mounts
  useEffect(() => {
    async function fetchData() {
      // Fetch products data from the API
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      // Set the products state with the fetched data
      setProducts(data.products);

      // Extract unique categories from the products data
      const uniqueCategories = [...new Set(data.products.map(product => product.category))];
      // Set the categories state with the unique categories
      setCategories(uniqueCategories);
    }
    fetchData();
  }, []);

  // Handler function for category change in the dropdown
  const handleCategoryChange = (event) => {
    // Update the selected category state with the selected value
    setSelectedCategory(event.target.value);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen p-8 pb-20 ">
        <div className="mb-4">
          <label htmlFor="category" className="mr-2 text-lg font-semibold">Filter by category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 items-center justify-items-center">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-3 rounded-lg shadow-sm bg-blue-800 flex flex-col justify-between">
            <Link href={`/details/${product.id}`}>
              <Image
                src={product.thumbnail}
                width={250}
                height={250}
                alt={product.title}
              />
              <div className="w-56 h-12 flex items-end text-white">
                {product.title}
              </div>
            </Link>
            <div className="text-center mt-2">
              <button className="p-2 bg-black rounded-xl w-56 hover:bg-gray-800">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}