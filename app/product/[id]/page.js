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
        <h1 className="text-6xl font-bold">Dolores Reserva Especial 70D082</h1>
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-[#8B1D3F] text-white rounded-2xl shadow-2xl">Precio Lista</button>
          <button className="px-6 py-2 border rounded-2xl shadow-2xl">Precio Oferta</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Product Image */}
        <div className="col-end-1">
          <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
            <img
              src="/bottle.png"
              alt="Wine bottle"
              className="w-58 h-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-span-3">
          <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
            {/* Product Meta Information */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label className="text-xl text-gray-600">Market</label>
                <select className="w-full mt-1 p-2 border rounded-2xl shadow">
                  <option>Walmart</option>
                  <option>Walmart East</option>
                  <option>Walmart South</option> 
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Seg. Pricing</label>
                <div className="mt-1 text-xl font-bold">KVI</div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Elasticidad</label>
                <div className="mt-1 text-xl font-bold">-2.65</div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Costo U. Promedio</label>
                <div className="mt-1 text-xl font-bold">$1.547</div>
              </div>
            </div>

  <table className="w-full table-fixed border border-gray-300 rounded-xl overflow-hidden border-separate border-spacing-0">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-left w-32"></th>
        <th className="px-4 py-2 text-left w-32">Precio Lista</th>
        <th className="px-4 py-2 text-left w-32">Precio Oferta</th>
        <th className="px-4 py-2 text-left w-32">% Descuento</th>
        <th colSpan="3" className="px-4 py-2 text-center border-l border-gray-300">Ventas Netas <br />
          <span className="text-xs font-normal">Millones CLP</span>
        </th>
        <th colSpan="3" className="px-4 py-2 text-center border-l border-gray-300">Volumen <br />
          <span className="text-xs font-normal">Millones Unidades</span>
        </th>
        <th colSpan="2" className="px-4 py-2 text-center border-l border-gray-300">Margen de Explotación <br />
          <span className="text-xs font-normal">Porcentual</span>
        </th>
        <th colSpan="3" className="px-4 py-2 text-center border-l border-gray-300">Margen de Explotación <br />
          <span className="text-xs font-normal">Absoluto</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {/* Actual Row */}
      <tr className="border-b text-center">
      <td className="text-left font-semibold px-4 py-2">Actual</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">$7489</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">$7390</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">1%</td>
        <td className="px-4 py-2 border-l border-gray-300 w-24">300</td>
        <td className="px-4 py-2 w-24">Diferencia $</td>
        <td className="px-4 py-2 w-24">Var. Filtro %</td>
        <td className="px-4 py-2 border-l border-gray-300 w-24">0.2</td>
        <td className="px-4 py-2 w-24">Diferencia $</td>
        <td className="px-4 py-2 w-24">Var. Filtro %</td>
        <td className="px-4 py-2 border-l border-gray-300 w-24">22.62%</td>
        <td className="px-4 py-2 w-24">Var. (p.p.)</td>
        <td className="px-4 py-2 border-l border-gray-300 w-24">69</td>
        <td className="px-4 py-2 w-24">Diferencia $</td>
        <td className="px-4 py-2 w-24">Var. Filtro %</td>
      </tr>

      {/* Recomendado Row */}
      <tr className="border-b text-center">
      <td className="text-left font-semibold px-4 py-2">Recomendado</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">$7290</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">$6490</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">11%</td>
        <td className="px-4 py-2 border-l border-gray-300">433</td>
        <td className="px-4 py-2">128.53</td>
        <td className="px-4 py-2">-31.37%</td>
        <td className="px-4 py-2 border-l border-gray-300">0.18</td>
        <td className="px-4 py-2">0.01</td>
        <td className="px-4 py-2">-0.03</td>
        <td className="px-4 py-2 border-l border-gray-300">13.00%</td>
        <td className="px-4 py-2">-9.63p.p.</td>
        <td className="px-4 py-2 border-l border-gray-300">56</td>
        <td className="px-4 py-2">-13</td>
        <td className="px-4 py-2">-12</td>
      </tr>

      {/* Simulación Row */}
      <tr className="text-center">
      <td className="text-left font-semibold px-4 py-2">Simulación</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">$8000</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">No Aplica</td>
      <td className="text-left font-semibold px-4 py-2 border-l border-gray-300">No Aplica</td>
        <td className="px-4 py-2 border-l border-gray-300">273</td>
        <td className="px-4 py-2">42.17%</td>
        <td className="px-4 py-2">-10.29%</td>
        <td className="px-4 py-2 border-l border-gray-300">0.14</td>
        <td className="px-4 py-2">7.38%</td>
        <td className="px-4 py-2">-16.02%</td>
        <td className="px-4 py-2 border-l border-gray-300">20.72%</td>
        <td className="px-4 py-2">-1.90p.p.</td>
        <td className="px-4 py-2 border-l border-gray-300">57</td>
        <td className="px-4 py-2">-18.32%</td>
        <td className="px-4 py-2">-17.64%</td>
      </tr>
    </tbody>
  </table>
          </div>
        </div>
      </div>

      {/* Pricing Recommendation Logic */}
      <div className="bg-white p-6 rounded-2xl shadow-2xl">
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
      <h2 className="text-left font-bold mb-2">{selectedProduct.name}</h2>
      <h1 className="text-2xl font-bold mb-4">Rango relaciones H-V</h1>

      {/* Relationship Graph */}
      <div className="flex flex-col items-center space-y-4">
        
        {/* Top Product (Vertical Relation) */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-lg shadow w-52 text-center">
          <div className="bg-white rounded-2xl shadow-2xl">
            <img
              src={selectedProduct.relatedProducts[0].image}
              alt={selectedProduct.relatedProducts[0].name}
              className="w-12 mx-auto mb-2"
            />
            </div>
            <div>
            <p className="text-sm font-semibold">{selectedProduct.relatedProducts[0].name}</p>
            <p className="text-xs">Precio Actual: ${selectedProduct.relatedProducts[0].priceActual}</p>
            <p className="text-xs">Precio Recomendado: ${selectedProduct.relatedProducts[0].priceRecommended}</p>
            </div>
            <button className="mt-2 px-4 py-1 text-sm rounded-2xl shadow hover:bg-gray-100">
              Ver Info
            </button>
          </div>
          {/* Vertical Arrow */}
          <div className="h-6 border-l-2 border-gray-400 mt-2"></div>
          <p className="text-xs text-gray-500">V Brecha 25%</p>
        </div>

        {/* Middle Section (Left, Center, Right) */}
        <div className="grid grid-cols-3 items-center gap-6">
          
          {/* Left Product (Horizontal Relation) */}
          <div className="flex flex-col items-center relative">
            <div className="bg-gray-100 p-3 rounded-lg shadow w-52 text-center">
            <div className="bg-white rounded-2xl shadow-2xl">
              <img
                src={selectedProduct.relatedProducts[1].image}
                alt={selectedProduct.relatedProducts[1].name}
                className="w-12 mx-auto mb-2"
              />
              </div>
              <div>
              <p className="text-sm font-semibold">{selectedProduct.relatedProducts[1].name}</p>
              <p className="text-xs">Precio Actual: ${selectedProduct.relatedProducts[1].priceActual}</p>
              <p className="text-xs">Precio Recomendado: ${selectedProduct.relatedProducts[1].priceRecommended}</p>
              </div>
              <button className="mt-2 px-4 py-1 text-sm rounded-2xl shadow hover:bg-gray-100">
                Ver Info
              </button>
            </div>
            {/* Horizontal Arrow */}
            <div className="absolute top-1/2 -right-6 w-6 border-t-2 border-gray-400"></div>
            <p className="absolute top-1/2 right-0 text-xs text-gray-500">H Brecha 25%</p>
          </div>

          {/* Center Product (Main Product) */}
          <div className="bg-white border-2 border-red-500 p-4 rounded-lg shadow w-52 text-center">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-12 mx-auto mb-2" />
            <p className="text-sm font-semibold">{selectedProduct.name}</p>
            <p className="text-xs">Precio Actual: ${selectedProduct.priceActual}</p>
            <p className="text-xs">Precio Recomendado: ${selectedProduct.priceRecommended}</p>
          </div>

          {/* Right Product (Horizontal Relation) */}
          <div className="flex flex-col items-center relative">
            <div className="bg-gray-100 p-3 rounded-lg shadow w-52 text-center">
            <div className="bg-white rounded-2xl shadow-2xl">
              <img
                src={selectedProduct.relatedProducts[2].image}
                alt={selectedProduct.relatedProducts[2].name}
                className="w-12 mx-auto mb-2"
              />
              </div>
              <div>
              <p className="text-sm font-semibold">{selectedProduct.relatedProducts[2].name}</p>
              <p className="text-xs">Precio Actual: ${selectedProduct.relatedProducts[2].priceActual}</p>
              <p className="text-xs">Precio Recomendado: ${selectedProduct.relatedProducts[2].priceRecommended}</p>
              </div>
              <button className="mt-2 px-4 py-1 text-sm rounded-2xl shadow hover:bg-gray-100">
                Ver Info
              </button>
            </div>
            {/* Horizontal Arrow */}
            <div className="absolute top-1/2 -left-6 w-6 border-t-2 border-gray-400"></div>
            <p className="absolute top-1/2 left-0 text-xs text-gray-500">H Brecha 25%</p>
          </div>
        </div>

        {/* Bottom Product (Vertical Relation) */}
        <div className="flex flex-col items-center">
          <div className="h-6 border-l-2 border-gray-400"></div>
          <p className="text-xs text-gray-500">V Brecha 25%</p>
          <div className="bg-gray-100 p-3 rounded-lg shadow w-52 text-center">
          <div className="bg-white rounded-2xl shadow-2xl">
            <img
              src={selectedProduct.relatedProducts[3].image}
              alt={selectedProduct.relatedProducts[3].name}
              className="w-10 mx-auto mb-2"
            />
            </div>
            <div>
            <p className="text-sm font-semibold">{selectedProduct.relatedProducts[3].name}</p>
            <p className="text-xs">Precio Actual: ${selectedProduct.relatedProducts[3].priceActual}</p>
            <p className="text-xs">Precio Recomendado: ${selectedProduct.relatedProducts[3].priceRecommended}</p>
            </div>
            <button className="mt-2 px-4 py-1 text-sm rounded-2xl shadow hover:bg-gray-100">
              Ver Info
            </button>
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
