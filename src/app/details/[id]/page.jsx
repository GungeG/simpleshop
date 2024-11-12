const Page = async ({ params }) => {
    const id = (await params).id;
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    let product = await response.json();
    return <div>{product.title}</div>;
  };
  
  export default Page;