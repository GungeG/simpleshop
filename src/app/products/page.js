"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

export default function Home() {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to store the list of unique categories
  const [categories, setCategories] = useState([]);
  // State to store the selected category from the dropdown
  const [selectedCategory, setSelectedCategory] = useState("");
  // State to store the cart items
  const [cartItems, setCartItems] = useState([]);
  
  // Function to generate the payment URL with cart items
  const generatePaymentUrl = () => {
    const baseUrl = "/payments";
    const queryParams = cartItems
      .map((item) => {
        const { thumbnail, title, price } = item;
        return `items=${JSON.stringify({ thumbnail, title, price })}`;
      })
      .join("&");
    return `${baseUrl}?${queryParams}`;
  };

  // useEffect hook to fetch products data when the component mounts
  useEffect(() => {
    async function fetchData() {
      // Fetch products data from the API
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      // Set the products state with the fetched data
      setProducts(data.products);

      // Extract unique categories from the products data
      const uniqueCategories = [
        ...new Set(data.products.map((product) => product.category)),
      ];
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

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen p-8 pb-20 flex">
      <div className="flex-1">
        <div className="mb-4">
          <label htmlFor="category" className="mr-2 text-lg font-semibold">
            Filter by category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 items-center justify-items-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-3 rounded-lg shadow-sm bg-blue-800 flex flex-col justify-between"
            >
              <Link href={`/details/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  width={250}
                  height={250}
                  alt={product.title}
                />
                <div className="w-40 h-12 flex items-end text-white">
                  {product.title}
                </div>
                <p className="mb-5 mt-2 font-bold">${product.price}</p>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 p-2 bg-black text-white rounded-xl"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-48 border-l border-gray-300 p-4 ml-4 ${
          cartItems.length === 0 ? "hidden" : ""
        }`}
      ><div className="sticky top-5">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg">{item.title}</h3>
            <div className="flex items-center justify-between">
              <Image
                className="w-20 h-auto"
                src={item.thumbnail}
                alt={item.title}
                width={50}
                height={50}
              />
              <p className="mb-2 mt-2 font-bold">${item.price}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-4 mb-4">
          <span className="font-bold">Total:</span>
          <span className="font-bold">
            $
            {cartItems
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </span>
        </div>

       <Link href={generatePaymentUrl()}>
          <button className="p-2 bg-blue-800 text-white rounded-xl w-36">
            Checkout
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

function PaymentsPage() {
  const searchParams = useSearchParams();

  // Your component logic here

  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
}

export function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentsPage />
    </Suspense>
  );
}
