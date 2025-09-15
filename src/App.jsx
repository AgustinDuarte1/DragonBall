import {useState, useEffect} from 'react';
import { Contendor } from "./components/Contenedor"
import {consultar} from "./api/api.js"
import { Tarjeta } from './components/Tarjeta.jsx';

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
      {/* Fondo degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-900 animate-gradient bg-[length:200%_200%]"></div>

      {/* Capa oscura sutil para contraste */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido */}
      <div className="relative z-10 p-6">
        {/* Input filtro */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Buscar personaje..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-80"
          />
        </div>

        {/* Grid tarjetas */}
        <Contendor>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
