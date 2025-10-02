export default function Card({ usuario, onClick }) {
  return (
    <div onClick={onClick} className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out cursor-pointer min-h-[250px] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src={usuario.foto}
          alt={usuario.nombre}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow-sm"
        />

        <h3 className="text-lg font-semibold mt-3 text-gray-800">
          {usuario.nombre}
        </h3>

        <p className="text-sm text-gray-500 mt-1">{usuario.perfil}</p>
        <p className="text-sm text-gray-500">{usuario.intereses}</p>

        <p className="text-sm text-blue-600 mt-2 font-medium break-all">
          {usuario.email}
        </p>
      </div>
    </div>
  );
}