
import ProductCard from "../components/ProductCard";

const products = [
  {
    brand: "ROG Zephyrus",
    description: "Laptop gaming dengan AI cooling & RGB futuristik",
    model: "/assets/rog.glb",
  },
  {
    brand: "MSI Titan",
    description: "Laptop premium dengan performa ultra tinggi",
    model: "/assets/msi.glb",
  },
  {
    brand: "Gigabyte AORUS",
    description: "Visual terbaik dan responsif untuk eSport",
    model: "/assets/aorus.glb",
  }
];

export default function Products() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Produk Unggulan</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
