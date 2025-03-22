"use client";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, ResponsiveContainer } from 'recharts'

const salesData = [
  { month: 'ENE', brutas: 80, netas: 45 },
  { month: 'FEB', brutas: 95, netas: 65 },
  { month: 'MAR', brutas: 85, netas: 55 },
  { month: 'ABR', brutas: 100, netas: 75 },
  { month: 'MAY', brutas: 75, netas: 45 },
  { month: 'JUN', brutas: 90, netas: 60 },
]

const marginData = [
  { month: 'Ene', value: 180 },
  { month: 'Feb', value: 250 },
  { month: 'Mar', value: 220 },
  { month: 'Abr', value: 280 },
  { month: 'May', value: 190 },
  { month: 'Jun', value: 100 },
  { month: 'Jul', value: 240 },
  { month: 'Ago', value: 210 },
  { month: 'Sep', value: 180 },
  { month: 'Oct', value: 190 },
  { month: 'Nov', value: 180 },
  { month: 'Dic', value: 280 },
]

const Dashboard = () => {

    return (
        <div>
          <h1 className="text-4xl font-bold mb-2">¡Hola Carlos!</h1>
          <p className="text-gray-600 mb-8">Mantén bajo control el precio y las promociones de tus productos</p>
    
          {/* Action Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Gestionar precios</h2>
              <div className="flex gap-4">
                <button className="px-4 py-2 border rounded hover:bg-gray-50">Lista</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">Promoción</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow col-span-1">
              <h2 className="text-xl font-semibold mb-4">Consultar por market</h2>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 border rounded hover:bg-gray-50">Jumbo</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">Unimark</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">Walmart</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">TOTTUS</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Consultar por producto</h2>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Buscar por SKU_ID"
                  className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-[#1C2536] text-white rounded hover:bg-[#2C3546]">
                  Buscar
                </button>
              </div>
            </div>
          </div>
    
          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Promedio de ventas</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line type="monotone" dataKey="brutas" stroke="#8884d8" />
                    <Line type="monotone" dataKey="netas" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Márgen total de ganancias</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marginData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey="value" fill="#f87171" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
    
          {/* Key Value Items */}
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Key Value Items</h2>
            <button className="px-4 py-2 bg-[#8B1D3F] text-white rounded hover:bg-[#7B0D2F]">
              Ver Todos
            </button>
          </div>
          <div className="grid grid-cols-7 gap-4">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <img 
                  src="/bottle.png" 
                  alt="Wine bottle" 
                  className="w-50 h-full "
                />
                <h3 className="text-sm font-medium">Dolores Reserva Especial 70D082</h3>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Dashboard;
