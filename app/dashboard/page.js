"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Legend, Tooltip,BarChart, Bar, ResponsiveContainer } from 'recharts'

const salesData = [
  { month: "", brutas: 100000000, netas: 50000000 },
  { month: "ENE", brutas: 120000000, netas: 70000000 },
  { month: "FEB", brutas: 80000000, netas: 90000000 },
  { month: "MAR", brutas: 60000000, netas: 80000000 },
  { month: "ABR", brutas: 30000000, netas: 100000000 },
  { month: "MAY", brutas: 90000000, netas: 60000000 },
  { month: "JUN", brutas: 30000000, netas: 40000000 },
]

const formatToMillions = (tick) => `${tick / 1000000}M`;

const marginData = [
  { month: "Ene", value: 120 },
  { month: "Feb", value: 230 },
  { month: "Mar", value: 150 },
  { month: "Abr", value: 280 },
  { month: "May", value: 180 },
  { month: "Jun", value: 90 },
  { month: "Jul", value: 260 },
  { month: "Ago", value: 220 },
  { month: "Sep", value: 210 },
  { month: "Oct", value: 200 },
  { month: "Nov", value: 215 },
  { month: "Dic", value: 250 },
]

const Dashboard = () => {

  const [selectedMonth, setSelectedMonth] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredData =
    selectedMonth === "All" ? salesData : salesData.filter((d) => d.month === selectedMonth);


    return (
        <div>
          <h1 className="text-4xl font-bold mb-2">¡Hola Carlos!</h1>
          <p className="text-gray-600 mb-8">Mantén bajo control el precio y las promociones de tus productos</p>
    
          {/* Action Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-2xl border-s-gray-50">
              <h2 className="text-3xl font-bold mb-4">Gestionar precios</h2>
              <div className="flex gap-2 flex-wrap"> 
                <button className="flex-1 px-6 py-3 border-2 rounded-3xl text-lg font-bold hover:bg-gray-50">Lista</button>
                <button className="flex-1 px-6 py-3 border-2 rounded-3xl text-lg font-bold hover:bg-gray-50">Promoción</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-2xl border-s-gray-50 col-span-1">
              <h2 className="text-3xl font-bold mb-4">Consultar por market</h2>
              <div className="flex gap-2 flex-wrap">
                <button className="flex-1 px-6 py-3 border-2 rounded-3xl text-lg font-bold hover:bg-gray-50">Jumbo</button>
                <button className="flex-1 px-6 py-3 border-2 rounded-3xl text-lg font-bold hover:bg-gray-50">Unimark</button>
                <button className="flex-1 px-6 py-3 border-2 rounded-3xl text-lg font-bold hover:bg-gray-50">Walmart</button>
                <button className="flex-1 px-6 py-3 border-2 rounded-3xl text-lg font-bold hover:bg-gray-50">TOTTUS</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-2xl border-s-gray-50">
              <h2 className="text-3xl font-bold mb-4">Consultar por producto</h2>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Buscar por SKU_ID"
                  className="flex-1 px-6 py-3 border rounded-3xl focus:outline-none"
                />
                <button className="px-6 py-2 border-2 text-black rounded-3xl hover:bg-gray-50">
                  Buscar
                </button>
              </div>
            </div>
          </div>
    
          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-2xl">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-3xl font-bold mb-4">Promedio de ventas</h2>
                 <select 
                    value={selectedMonth} 
                    onChange={handleFilterChange} 
                    className="border p-2 rounded-2xl text-sm ml-4"
                  ><option value="All">6 meses</option>
                  {salesData.map((d) => (
                    <option key={d.month} value={d.month}>{d.month}</option>
                  ))}
                </select>
            </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart width={500} height={300} data={filteredData} margin={{ top: 20,right: 30,left: 20,bottom: 50,}}>
                  <Legend layout="horizontal" verticalAlign="top" align="right" iconType="circle"  />
                    <CartesianGrid strokeDasharray="3 3" strokeWidth={1.5} horizontal={true} vertical={false} />
                    <XAxis dataKey="month" />
                    {/* <YAxis /> */}
                    <YAxis yAxisId="left" strokeWidth={2} domain={[10000000,100000000]} ticks={[10000000, 50000000, 100000000]} tickFormatter={formatToMillions} />
                    <Tooltip  formatter={(value) => `${value / 1000000}M`} />
                    <Line yAxisId="left" type="monotone" dataKey="brutas" stroke="#641e32" strokeWidth={2} />
                    <Line yAxisId="left" type="monotone" dataKey="netas" stroke="#af4b5a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Márgen total de ganancias</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marginData}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3}  />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 300]} ticks={[0, 100, 200, 300]}/>
                    <Tooltip />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#f87171" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#f87171" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill="url(#barGradient)" radius={[10, 10, 0, 0]} barSize={35} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
    
          {/* Key Value Items */}
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-3xl font-bold">Key Value Items</h2>
            <button className="px-4 py-2 bg-[#8B1D3F] text-white rounded-xl shadow-2xs hover:bg-[#7B0D2F]">
              Ver Todos
            </button>
          </div>
          <div className="grid grid-cols-7 gap-4">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-2xl">
                <div key={i} className="bg-white p-9 rounded-xl shadow-2xl">
                <img 
                  src="/bottle.png" 
                  alt="Wine bottle" 
                  className="w-25 h-full"
                />
                </div>
                <h3 className="text-xl font-bold text-center">Dolores Reserva Especial 70D082</h3>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Dashboard;
