import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      {data.products.map((product) => {
        return (
          <Link href={`/details/${product.id}`} key={product.id}>
            <div className="p-3 rounded-lg shadow-sm bg-blue-800">
              <Image
                src={product.thumbnail}
                width={250}
                height={250}
                alt={product.title}
              />
              {product.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}