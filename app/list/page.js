"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PriceList() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(true); // For SKU collapsible section
  const [simulatedPrices, setSimulatedPrices] = useState({}); // Store editable prices
  const [selectedFilters, setSelectedFilters] = useState([
    "Market",
    "Categoría",
    "Marca",
    "Segmento",
    "SKU_ID",
  ]);

  // Dummy data (should be replaced with actual API data)
  const products = [
    { id: "70D082", name: "Dolores Reserva Especial 70D082", market: "Walmart", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 2985, quantity: 12590,image: "/bottle.png" },
    { id: "50D059", name: "Cielo Gold Label 50D059", market: "Target", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 3120, quantity: 8300 ,image: "/bottle.png"},
    { id: "60D012", name: "Montes Alpha 60D012", market: "Costco", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 3120, quantity: 3120,image: "/bottle.png" },
    { id: "80D025", name: "Alamos Malbec 80D025", market: "Kroger", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 1580, quantity: 4570,image: "/bottle.png" },
    { id: "40D005", name: "Casa Noble Añejo 40D005", market: "Safeway", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 4800, quantity: 6020 ,image: "/bottle.png"},
  ];

  const handlePriceChange = (id, value) => {
    setSimulatedPrices({ ...simulatedPrices, [id]: value });
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-6xl font-bold">Gestión de precios</h1>
        <div className="flex gap-2">
          <button className="text-2xl px-6 py-2 bg-[#8B1D3F] text-white rounded-2xl shadow-2xl">Precio Lista</button>
          <button className="text-2xl px-6 py-2 border rounded-2xl shadow-2xl">Precio Oferta</button>
        </div>
      </div>

      {/* Simulador de Impacto & KPI Table Container */}
      <div className="grid grid-cols-[auto_1fr] gap-9 mb-6">
        {/* Simulador de Impacto */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-3xl font-bold mb-4">Simulador de Impacto</h2>
          <p className="text-xl mb-4">
            Horizonte de tiempo para cálculo/simulación de métricas: 1 Año
          </p>
        </div>

      {/* KPI Table */}
<div className="bg-white rounded-2xl shadow-2xl p-6 overflow-x-auto">
  <table className="w-full table-fixed border border-gray-300 rounded-xl overflow-hidden border-separate border-spacing-0">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-left w-32"></th>
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
      
      {/* Dropdown Filters */}
      <div className="grid grid-cols-8 gap-4 mb-6">
          <select className="text-2xl p-2 border rounded-2xl shadow-2xl"><option>Market</option></select>
          <select className="text-2xl p-2 border rounded-2xl shadow-2xl"><option>Categoría</option></select>
          <select className="text-2xl p-2 border rounded-2xl shadow-2xl"><option>Marca</option></select>
          <select className="text-2xl p-2 border rounded-2xl shadow-2xl"><option>Segmento</option></select>
          <select className="text-2xl p-2 border rounded-2xl shadow-2xl"><option>SKU_ID</option></select>
          <button className="text-2xl p-2 border rounded-2xl shadow-2xl hover:bg-gray-100">Eliminar filtros</button>
        </div>
        

          {/* Filters */}
          <div className="flex gap-4 mb-3">
                  {selectedFilters.map((filter, index) => (
                    <div key={index} className="px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2">
                      {filter} <button onClick={() => setSelectedFilters(selectedFilters.filter(f => f !== filter))} className="text-red-500">X</button>
                    </div>
                  ))}
                </div>



                <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-4">
      <table className="min-w-full border border-gray-300 rounded-2xl overflow-hidden">
        {/* Table Header */}
        <thead className="bg-gray-100 rounded-t-lg">
          <tr className="bg-gray-50">
            <th className="px-4 py-2 rounded-tl-lg"></th>
            <th className="px-4 py-2 border-l border-gray-300"></th>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2"></th>
            <th colSpan="2" className="px-4 py-2 text-center border-l border-gray-300">
              Actual
            </th>
            <th colSpan="2" className="px-4 py-2 text-center border-l border-gray-300">
              Recomendado
            </th>
            <th colSpan="2" className="px-4 py-2 text-center border-l border-gray-300 rounded-tr-lg">
              Simulación
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left">
              <input type="checkbox" className="mr-2 align-middle" />
              SKU_ID
            </th>
            <th className="px-4 py-2 text-left border-l border-gray-300">Market</th>
            <th className="px-4 py-2 text-left">Categoría</th>
            <th className="px-4 py-2 text-left">Marca</th>
            <th className="px-4 py-2 text-left">Seg. Pricing</th>
            <th className="px-4 py-2 text-center border-l border-gray-300 cursor-pointer">
              Precio ↑
            </th>
            <th className="px-4 py-2 text-center cursor-pointer">Cantidad ↑</th>
            <th className="px-4 py-2 text-center border-l border-gray-300 cursor-pointer">
              Precio ↑
            </th>
            <th className="px-4 py-2 text-center cursor-pointer">Cantidad ↑</th>
            <th className="px-4 py-2 text-center border-l border-gray-300 cursor-pointer">
              Precio ↑
            </th>
            <th className="px-4 py-2 text-center cursor-pointer">Cantidad ↑</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 last:rounded-b-lg cursor-pointer"
              onClick={() => router.push(`/product/${product.id}`)} // Navigate to product details
            >
              {/* SKU_ID (Checkbox + Image + Name) */}
              <td className="flex items-center gap-2 px-4 py-2">
                <input type="checkbox" className="align-middle" onClick={(e) => e.stopPropagation()} />
                <img src={product.image} className="w-10 h-10 rounded-md" alt="product" />
                <span className="whitespace-nowrap">{product.name || "N/A"}</span>
              </td>

              {/* Market, Category, Brand, Seg. Pricing */}
              <td className="px-4 py-2 border-l border-gray-300">{product.market || "N/A"}</td>
              <td className="px-4 py-2">{product.category || "N/A"}</td>
              <td className="px-4 py-2">{product.brand || "N/A"}</td>
              <td className="px-4 py-2">{product.segment || "N/A"}</td>

              {/* Actual (Precio, Cantidad) */}
              <td className="px-4 py-2 text-center border-l border-gray-300">
                ${product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center">
                {product.price ? product.price.toLocaleString() : "0"}
              </td>

              {/* Recomendado (Precio, Cantidad) */}
              <td className="px-4 py-2 text-center border-l border-gray-300">
                ${product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center">
                {product.price ? product.price.toLocaleString() : "0"}
              </td>

              {/* Simulación (Editable Precio input, Cantidad) */}
              <td className="px-4 py-2 text-center border-l border-gray-300">
                <input
                  type="text"
                  className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center"
                  placeholder="Ingresar"
                  defaultValue={product.simulationPrice ? product.simulationPrice.toLocaleString() : ""}
                  onClick={(e) => e.stopPropagation()} // Prevent row click
                />
              </td>
              <td className="px-4 py-2 text-center">
                {product.price ? product.price.toLocaleString() : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

            <div>
            <h1>
              .
            </h1>
            </div>

                            {/* Datos por Escenario */}
                  <div className="p-4">
                    <h2 className="text-6xl font-bold mb-4">Datos por escenario</h2>
                    </div>
                   
                      {/* Dropdown Filters */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <button className="text-2xl p-2 border rounded-2xl shadow-2xl text-black hover:text-white hover:bg-[#8B1D3F] transition-colors duration-200">
                          Escenario Actual
                        </button>
                        <button className="text-2xl p-2 border rounded-2xl shadow-2xl text-black hover:text-white hover:bg-[#8B1D3F] transition-colors duration-200">
                          Recomendación
                        </button>
                        <button className="text-2xl p-2 border rounded-2xl shadow-2xl text-black hover:text-white hover:bg-[#8B1D3F] transition-colors duration-200">
                          Simulación
                        </button>
                      </div>

            
                      <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-4">
      <table className="min-w-full border border-gray-300 rounded-2xl overflow-hidden">
        {/* Table Header */}
        <thead className="bg-gray-100 rounded-t-lg">
         
          <tr>
            <th className="px-4 py-2 text-left">
              SKU_ID
            </th>
            <th className="px-4 py-2 text-left border-l border-gray-300">Market</th>
            <th className="px-4 py-2 text-left">Categoría</th>
            <th className="px-4 py-2 text-left">Marca</th>
            <th className="px-4 py-2 text-left">Seg. Pricing</th>
            <th className="px-4 py-2 text-center border-l border-gray-300 cursor-pointer">
              Precio Lista
            </th>
            <th className="px-4 py-2 text-center cursor-pointer">Precio Oferta</th>
            <th className="px-4 py-2 text-center cursor-pointer">
              Costo U. Promedio
            </th>
            <th className="px-4 py-2 text-center cursor-pointer">Cant. Precio Lista</th>
            <th className="px-4 py-2 text-center cursor-pointer">
            Cant. Precio Lista
            </th>
            <th className="px-4 py-2 text-center border-l border-gray-300 cursor-pointer">Ventas Sell</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 last:rounded-b-lg cursor-pointer"
              onClick={() => router.push(`/product/${product.id}`)} // Navigate to product details
            >

              <td className="flex items-center gap-2 px-4 py-2">
                <img src={product.image} className="w-10 h-10 rounded-md" alt="product" />
                <span className="whitespace-nowrap">{product.name || "N/A"}</span>
              </td>


              <td className="px-4 py-2 border-l border-gray-300">{product.market || "N/A"}</td>
              <td className="px-4 py-2">{product.category || "N/A"}</td>
              <td className="px-4 py-2">{product.brand || "N/A"}</td>
              <td className="px-4 py-2">{product.segment || "N/A"}</td>
              <td className="px-4 py-2 text-center border-l border-gray-300">
                ${product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center">
                {product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center ">
                ${product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center">
                {product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center ">
                ${product.price ? product.price.toLocaleString() : "0"}
              </td>
              <td className="px-4 py-2 text-center border-l border-gray-300">
                {product.price ? product.price.toLocaleString() : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



    </div>
  );
}
