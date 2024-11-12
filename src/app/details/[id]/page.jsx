'use server'; 

import Image from "next/image";
import StarRating from "@/app/components/StarRating";

const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-start mb-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={product.thumbnail}
            width={500}
            height={500}
            alt={product.title}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-4 max-w-prose">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="mb-2">{product.description}</p>
          <p className="mb-2">Price: ${product.price}</p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-200" />
      <section>
         <h2 className="text-xl font-semibold mb-4 flex items-center">
           Reviews
           <span className="ml-2">
              <StarRating rating={product.rating} />
            </span>
          </h2>        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <StarRating rating={review.rating} />
                  <span className="ml-2 text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="mb-2 font-semibold text-gray-200">"{review.comment}"</p>
                <p className="mb-2 text-sm text-gray-300">- {review.reviewerName}</p>
                <p className="text-xs text-gray-400">Email: {review.reviewerEmail}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
