"use client";

import { useSearchParams } from 'next/navigation';

const Payment = () => {
  const searchParams = useSearchParams();
  const paramValues = searchParams.getAll('items'); // Use 'getAll' to retrieve multiple values

  return (
    <div>
      Payment...
      <div>Query Parameter Values: {paramValues.join(', ')}</div>
    </div>
  );
};

export default Payment;