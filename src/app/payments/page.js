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
    <div>
      <h1>Payment</h1>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.thumbnail} alt={item.title} width={50} height={50} />
            <p>Title: {item.title}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Payment;