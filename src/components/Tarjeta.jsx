export function Tarjeta ({ item }) {

    return (
      <div className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-full h-64 object-contain bg-gray-100"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-2">
          <h3 className="text-white font-semibold text-lg">{item?.name}</h3>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-600 font-medium">{item?.ki} KI</p>
      </div>
    </div>
    )
}

