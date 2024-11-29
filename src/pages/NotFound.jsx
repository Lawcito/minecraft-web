import { Link } from "react-router-dom";
import fondoerror from "../assets/404.jpg";

function NotFound() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img src={fondoerror} alt="" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-10">
        <h1 className="text-8xl font-bold text-blue-700">404</h1>
        <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-white">
          Página no encontrada
        </h2>
        <Link to="/">
          <button className="mt-6 px-4 py-4 text-white bg-orange-900 rounded-lg hover:bg-black">
            Regresar al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
