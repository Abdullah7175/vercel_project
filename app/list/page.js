"use client";
import { useRouter } from "next/navigation";

export default function PriceList() {
  const router = useRouter();

  // Dummy data (should be replaced with actual API data)
  const products = [
    { id: "70D082", name: "Dolores Reserva Especial 70D082", market: "Walmart", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 2985, quantity: 12590 },
    { id: "50D059", name: "Cielo Gold Label 50D059", market: "Target", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 3120, quantity: 8300 },
    { id: "60D012", name: "Montes Alpha 60D012", market: "Costco", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 3120, quantity: 3120 },
    { id: "80D025", name: "Alamos Malbec 80D025", market: "Kroger", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 1580, quantity: 4570 },
    { id: "40D005", name: "Casa Noble Añejo 40D005", market: "Safeway", category: "Placeholder", brand: "Placeholder", segment: "Placeholder", price: 4800, quantity: 6020 },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestión de precios</h1>
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-[#8B1D3F] text-white rounded">Precio Lista</button>
          <button className="px-6 py-2 border rounded">Precio Oferta</button>
        </div>
      </div>

      {/* Simulador de Impacto */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Simulador de Impacto</h2>
        <p className="text-sm text-gray-600 mb-4">Horizonte de tiempo para cálculo/simulación de métricas: 1 Año</p>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          <select className="p-2 border rounded"><option>Market</option></select>
          <select className="p-2 border rounded"><option>Categoría</option></select>
          <select className="p-2 border rounded"><option>Marca</option></select>
          <select className="p-2 border rounded"><option>Segmento</option></select>
          <select className="p-2 border rounded"><option>SKU_ID</option></select>
          <button className="p-2 bg-gray-100 border rounded">Eliminar filtros</button>
        </div>

        {/* Products Table */}
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="text-left pb-2">SKU_ID</th>
              <th className="text-left pb-2">Market</th>
              <th className="text-left pb-2">Categoría</th>
              <th className="text-left pb-2">Marca</th>
              <th className="text-left pb-2">Seg. Pricing</th>
              <th className="text-right pb-2">Precio Lista</th>
              <th className="text-right pb-2">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b cursor-pointer hover:bg-gray-100"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <td className="py-3">{product.name}</td>
                <td>{product.market}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.segment}</td>
                <td className="text-right">${product.price.toLocaleString()}</td>
                <td className="text-right">{product.quantity.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Datos por Escenario */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Datos por escenario</h2>

        {/* Tabs for Different Scenarios */}
        <div className="flex mb-4">
          <button className="px-4 py-2 bg-[#8B1D3F] text-white rounded-l">Escenario Actual</button>
          <button className="px-4 py-2 border">Recomendación</button>
          <button className="px-4 py-2 border rounded-r">Simulación</button>
        </div>

        {/* Scenario Data Table */}
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="text-left pb-2">SKU_ID</th>
              <th className="text-left pb-2">Market</th>
              <th className="text-left pb-2">Categoría</th>
              <th className="text-left pb-2">Marca</th>
              <th className="text-left pb-2">Seg. Pricing</th>
              <th className="text-right pb-2">Precio Lista</th>
              <th className="text-right pb-2">Precio Oferta</th>
              <th className="text-right pb-2">Cant. Promedio</th>
              <th className="text-right pb-2">Ventas Netas</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-3">{product.name}</td>
                <td>{product.market}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.segment}</td>
                <td className="text-right">${product.price.toLocaleString()}</td>
                <td className="text-right">${(product.price * 0.9).toFixed(2)}</td>
                <td className="text-right">{(product.quantity * 0.85).toFixed(0)}</td>
                <td className="text-right">${(product.price * product.quantity).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
