"use client";

import { useSearchParams } from 'next/navigation';

const Payment = () => {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get('test'); // Replace 'test' with query parameter name

  return (
    <div>
      Payment...
      <div>Query Parameter Value: {paramValue}</div>
    </div>
  );
};

export default Payment;