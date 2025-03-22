"use client"
import { useState } from "react";

import Link from "next/link";

export default function ProductDetail({ params }) {
  const [selectedProduct, setSelectedProduct] = useState(null);


  const getRangeWidth = (min, max, value) => {
    if (value < min) return "0%";
    if (value > max) return "100%";
    return `${((value - min) / (max - min)) * 100}%`;
  };

  const handleOpenModal = (product) => {
    console.log("Opening modal for:", product); // Debugging log
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const selectedProductDetails = {
    name: "Dolores Reserva Especial 70D082",
    image: "/bottle.png",
    priceActual: "$5,190",
    priceRecommended: "$5,090",
    relatedProducts: [
      {
        name: "Casillero Del Diablo Reserva Privada PC7870",
        image: "/bottle.png",
        priceActual: "$7,190",
        priceRecommended: "$6,090",
        relation: "V",
        gap: "25%",
      },
      {
        name: "Casillero Del Diablo Reserva Especial B0750",
        image: "/bottle.png",
        priceActual: "$5,090",
        priceRecommended: "$5,190",
        relation: "H",
        gap: "25%",
      },
      {
        name: "Casillero Del Diablo Reserva Especial 7C754",
        image: "/bottle.png",
        priceActual: "$5,000",
        priceRecommended: "$5,190",
        relation: "H",
        gap: "25%",
      },
      {
        name: "Casillero Del Diablo Reserva Estándar F5632",
        image: "/bottle.png",
        priceActual: "$4,190",
        priceRecommended: "$4,090",
        relation: "V",
        gap: "25%",
      },
    ],
  };
  
  return (
    <div className="p-6">
      {/* Back Link */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/list" className="text-gray-600 hover:text-gray-900">
        ← Volver
          </Link>
      </div>

      {/* Title & Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dolores Reserva Especial 70D082</h1>
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-[#8B1D3F] text-white rounded">Precio Lista</button>
          <button className="px-6 py-2 border rounded">Precio Oferta</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Product Image */}
        <div className="col-end-1">
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <img
              src="/bottle.png"
              alt="Wine bottle"
              className="w-50 h-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-span-3">
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            {/* Product Meta Information */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label className="text-sm text-gray-600">Market</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option>Walmart</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Seg. Pricing</label>
                <div className="mt-1 font-semibold">KVI</div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Elasticidad</label>
                <div className="mt-1 font-semibold">-2.65</div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Costo U. Promedio</label>
                <div className="mt-1 font-semibold">$1.547</div>
              </div>
            </div>

            {/* Pricing Table */}
            <table className="w-full border rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-sm text-gray-600">
                <tr>
                  <th className="text-left p-2"></th>
                  <th className="text-left p-2">Precio Lista</th>
                  <th className="text-left p-2">Precio Oferta</th>
                  <th className="text-left p-2">% Descuento</th>
                  <th className="text-left p-2">Ventas Netas</th>
                  <th className="text-left p-2">Volumen</th>
                  <th className="text-left p-2">Márgen de Explotación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Actual</td>
                  <td>$7,489</td>
                  <td>$7,390</td>
                  <td>1%</td>
                  <td>300</td>
                  <td>0.2</td>
                  <td>22.62%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Recomendado</td>
                  <td>$7,290</td>
                  <td>$6,490</td>
                  <td>11%</td>
                  <td>433</td>
                  <td>0.18</td>
                  <td>13.00%</td>
                </tr>
                <tr>
                  <td className="p-2">Simulación</td>
                  <td>$8,000</td>
                  <td>No Aplica</td>
                  <td>No Aplica</td>
                  <td>273</td>
                  <td>0.14</td>
                  <td>20.72%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pricing Recommendation Logic */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Lógica de recomendación</h2>

        <div className="overflow-x-auto">
        <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-600">
                <th className="text-left p-2">Regla</th>
                <th className="text-left p-2">Precios y rangos</th>
                <th className="text-right p-2">Regla</th>
                <th className="text-center p-2">Info</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Precio actual", range: 7000, min: 0, max: 10000, value: 7000, highlight: true },
                { label: "Márgen mínimo", range: [7000, Infinity], min: 7000, max: 10000, value: 7500 },
                { label: "Rango Competitivo", range: [6000, 8000], min: 6000, max: 8000, value: 6800 },
                { label: "Rango relaciones H-V", range: [6000, 8000], min: 6000, max: 8000, value: 7100 },
                { label: "Rango solución", range: null, min: 6000, max: 8000, value: null, highlight: true },
                { label: "Precio recomendado", range: 6000, min: 0, max: 10000, value: 6000, highlight: true }
              ].map((row, i) => (
                <tr key={i} className={`border-b ${row.highlight ? "bg-red-100 font-semibold" : ""}`}>
                  <td className="p-2">{row.label}</td>
                  <td className="p-2">
                    <div className="relative w-full h-6 bg-gray-100 rounded-lg flex items-center">
                      <div 
                        className="absolute bg-red-500 h-4 rounded"
                        style={{
                          left: `${getRangeWidth(row.min, row.max, row.value)}`,
                          width: row.range ? `${getRangeWidth(row.min, row.max, row.value)}` : "0%"
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="p-2 text-right">
                    {Array.isArray(row.range) ? `$${row.range[0]} - $${row.range[1]}` : row.range ? `$${row.range}` : "Sin rango factible"}
                  </td>
                  <td className="p-2 text-center">
                  <button 
                        onClick={() => handleOpenModal(selectedProductDetails)}
                        className="text-blue-500 hover:text-blue-700"
                    >
                      ❓
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Gridline Labels */}
        <div className="relative w-2/6 mx-auto mt-2">
  <div className="flex justify-between text-gray-500 text-xs">
    {[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].map((val) => (
      <span key={val}>${val.toLocaleString()}</span>
    ))}
  </div>
</div>
      </div>
{/* Modal Popup */}
{selectedProduct && (
  <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-xs z-50 p-4">
    <div className="bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] shadow-lg relative overflow-hidden">
      
      {/* Close Button */}
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
      >
        ✖
      </button>

      {/* Title */}
      <h2 className="text-left font-bold mb-4 ">{selectedProduct.name}</h2>
      <h1 className="text-2xl font-bold mb-4 ">Rango relaciones H-V</h1>

      {/* Relationship Graph */}
      <div className="flex flex-col items-center space-y-2">
        {/* Top Product */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-lg shadow w-40 text-center">
            <img src={selectedProduct.relatedProducts[0].image} alt={selectedProduct.relatedProducts[0].name} className="w-12 mx-auto mb-1" />
            <p className="text-xs font-semibold">{selectedProduct.relatedProducts[0].name}</p>
            <p className="text-xs">Actual: {selectedProduct.relatedProducts[0].priceActual}</p>
            <p className="text-xs">Recomendado: {selectedProduct.relatedProducts[0].priceRecommended}</p>
          </div>
          <div className="h-4 border-l-2 border-gray-300"></div>
        </div>

        {/* Center Layout */}
        <div className="grid grid-cols-3 gap-10 items-center">
          {/* Left Product */}
          <div className="flex flex-col items-center relative">
          <div className="bg-gray-100 p-3 rounded-lg shadow w-40 text-center relative after:content-[''] after:absolute after:top-1/2 after:right-[-15px] after:w-0 after:h-0 after:border-t-4 after:border-b-4 after:border-l-8 after:border-l-gray-300 after:border-transparent">
            <img src={selectedProduct.relatedProducts[1].image} alt={selectedProduct.relatedProducts[1].name} className="w-12 mx-auto mb-1" />
            <p className="text-xs font-semibold">{selectedProduct.relatedProducts[1].name}</p>
            <p className="text-xs">Actual: {selectedProduct.relatedProducts[1].priceActual}</p>
            <p className="text-xs">Recomendado: {selectedProduct.relatedProducts[1].priceRecommended}</p>
          </div>
        </div>

          {/* Center Product (Main) */}
          <div className="bg-white border-2 border-red-500 p-3 rounded-lg shadow w-40 text-center">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-12 mx-auto mb-1" />
            <p className="text-xs font-semibold">{selectedProduct.name}</p>
            <p className="text-xs">Actual: {selectedProduct.priceActual}</p>
            <p className="text-xs">Recomendado: {selectedProduct.priceRecommended}</p>
          </div>

          {/* Right Product */}
          <div className="flex flex-col items-center relative">
            <div className="bg-gray-100 p-3 rounded-lg shadow w-40 text-center relative after:content-[''] after:absolute after:top-1/2 after:left-[-15px] after:w-0 after:h-0 after:border-t-4 after:border-b-4 after:border-r-8 after:border-r-gray-300 after:border-transparent">
              <img src={selectedProduct.relatedProducts[2].image} alt={selectedProduct.relatedProducts[2].name} className="w-12 mx-auto mb-1" />
              <p className="text-xs font-semibold">{selectedProduct.relatedProducts[2].name}</p>
              <p className="text-xs">Actual: {selectedProduct.relatedProducts[2].priceActual}</p>
              <p className="text-xs">Recomendado: {selectedProduct.relatedProducts[2].priceRecommended}</p>
            </div>
          </div>
        </div>

        {/* Bottom Product */}
        <div className="flex flex-col items-center">
          <div className="h-4 border-l-2 border-gray-300"></div>
          <div className="bg-gray-100 p-3 rounded-lg shadow w-40 text-center">
            <img src={selectedProduct.relatedProducts[3].image} alt={selectedProduct.relatedProducts[3].name} className="w-12 mx-auto mb-1" />
            <p className="text-xs font-semibold">{selectedProduct.relatedProducts[3].name}</p>
            <p className="text-xs">Actual: {selectedProduct.relatedProducts[3].priceActual}</p>
            <p className="text-xs">Recomendado: {selectedProduct.relatedProducts[3].priceRecommended}</p>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <h3 className="font-semibold">Información útil</h3>
        <p className="text-xs text-gray-600 mt-1">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis 
        diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
