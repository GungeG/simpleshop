import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={"/static/images/Kiosk.jpg"} 
        fill
        style={{ objectFit: "cover" }}
        alt="Kiosk" 
        className="z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Kiosk Kompagniet</h1>
        <Link className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" href="/products">Products</Link>
      </div>
    </div>
  );
}