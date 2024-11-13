import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {data.products.map((product) => {
        return (
          <div
            key={product.id}
            className="p-3 rounded-lg shadow-sm bg-blue-800"
          >
            <Image
              src={product.thumbnail}
              width={250}
              height={250}
              alt={product.title}
            />
            <Link href={`/details/${product.id}`}>{product.title}</Link>
          </div>
        );
      })}
    </div>
  );
}