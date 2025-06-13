
export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">DigitalTech</h1>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-cyan-400">Beranda</a></li>
        <li><a href="/products" className="hover:text-cyan-400">Produk</a></li>
      </ul>
    </nav>
  );
}
