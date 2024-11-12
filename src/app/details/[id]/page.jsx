'use server'; 

import Image from "next/image";

const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();
  return (
    <div>
<h1>{product.title}</h1>
      <Image
        src={product.thumbnail}
        width={250}
        height={250}
        alt={product.title}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <section>Rating: {product.rating}</section>
      <div>
        <h2>Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index}>
            <p>Rating: {review.rating}</p>
            <p>Date: {new Date(review.date).toLocaleDateString()}</p>
            <p>Name: {review.reviewerName}</p>
            <p>Email: {review.reviewerEmail}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
