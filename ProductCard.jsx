
export default function ProductCard({ brand, description, model }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-4 hover:shadow-cyan-500 transition">
      <model-viewer
        src={model}
        alt={brand}
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '250px' }}
      />
      <h3 className="text-xl font-semibold mt-4">{brand}</h3>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded">Detail</button>
    </div>
  );
}
