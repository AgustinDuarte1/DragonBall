import {useState, useEffect} from 'react';
import { Contendor } from "./components/Contenedor"
import {consultar} from "./api/api.js"
import { Tarjeta } from './components/Tarjeta.jsx';
import dragonballogo from './image.png'

function App () {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtro, setFiltro] = useState("");

  useEffect(() =>{
    async function cargar(){
    const i = await consultar()
    setItems(i);
    setLoading(false);
    }
    cargar();
  }, []);

   if (loading) {
    return <p className="text-center mt-6 text-lg font-semibold">Cargando...</p>;
  }

  const filtrados = items.filter((item) =>
    item?.name?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-600 animate-gradient bg-[length:200%_200%]"></div>

      {/* Contenido */}
      <div className="relative z-10 p-6">
        <img 
          src={dragonballogo}
          alt="Dragon Ball Logo" 
          className="w-120 mx-auto my-2"
            />
        {/* Input filtro */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Buscar personaje..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-black w-80"
          />
        </div>

        {/* Grid tarjetas */}
        <Contendor>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {filtrados.map((item) => (
              <Tarjeta item={item} key={item?.id} />
            ))}
          </div>
        </Contendor>
      </div>
    </div>
  )
}

export default App
