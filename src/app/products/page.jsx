import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      {data.products.map((product) => {
        return (
          <div key={product.id} className="p-3 rounded-lg shadow-sm bg-blue-800 flex flex-col justify-between neon-glow">
            <Link href={`/details/${product.id}`} >
              <div className="bg-black p-2 rounded-xl">
                <Image
                  src={product.thumbnail}
                  width={250}
                  height={250}
                  alt={product.title}
                />
                <div className="w-56 h-12 flex items-end text-white">
                  {product.title}
                </div>
              </div>
            </Link>
            <div className="text-center mt-2">
              <button className="p-2 bg-black rounded-xl w-56">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}