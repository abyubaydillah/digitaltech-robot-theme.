
import '@google/model-viewer';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">DigitalTech Future</h1>
      <p className="text-xl text-gray-300 mb-8">Komponen Komputer & Laptop Bertema Robot</p>
      <div className="flex justify-center">
        <model-viewer
          src="/assets/laptop.glb"
          alt="Laptop Futuristik"
          auto-rotate
          camera-controls
          style={{ width: '600px', height: '400px' }}
        />
      </div>
    </section>
  );
}
