"use client";

import { useSearchParams } from "next/navigation";

const Payment = () => {
  const searchParams = useSearchParams();
  const paramValues = searchParams.getAll("items"); // Use 'getAll' to retrieve multiple values

  // Parse the paramValues to extract item details
  const items = paramValues.map((item) => JSON.parse(item));

  // Calculate the total price
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
 

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 mr-4"
              />
              <p className="text-lg">{item.title}</p>
            </div>
            <p className="text-lg font-semibold">${item.price}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-4">
        <h2 className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
      <div className="flex justify-end mt-4">
      <button className="p-2 bg-blue-800 text-white rounded-xl w-36" onClick={()=> {console.log("Thanks for your money :3 <3"),
      alert("Check Console.log :)")
      }}>
            Checkout
          </button>
          </div>
    </div>
  );
};

export default Payment;
