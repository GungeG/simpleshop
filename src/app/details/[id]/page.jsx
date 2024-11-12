import Image from 'next/image';

const Page = async ({ params }) => {
    const id = (await params).id;
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    let product = await response.json();
    return <div>
      {product.title}
      <Image
        src={product.thumbnail}
        width={250}
        height={250}
        alt={product.title}
      />
      {product.description}
      </div>;
  };
  
  export default Page;