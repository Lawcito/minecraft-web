import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import event from "../assets/memo.png";
import sapulogo from "../assets/sapulogo.png";
import arg from "../assets/arg.webp";
import modo from "../assets/juntos.jpeg";
import ModalImage from "react-modal-image";

function Memories() {
  const [data, setData] = useState(undefined);
  const [visibleImage, setVisibleImage] = useState(6);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "memories");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((memories) => ({ id: memories.id, ...memories.data() }))
      )
    );
  }, []);

  function loadMoreImage() {
    setVisibleImage((prev) => prev + 6);
  }

  return (
    <div className="h-screen w-full flex flex-col bg-cover overflow-auto relative bg-gradient-to-b from-[#C34F1F] to-orange-400 gap-40 lg:gap-0">
      <div className="h-full w-full">
        <div className="">
          {/*img fondo*/}
          <img src={event} alt="" className="w-full h-auto" />
          {/*Logo SapuCraft*/}
          <img
            src={sapulogo}
            alt=""
            className="absolute lg:h-40 lg:bottom-24 lg:left-8 lg:ml-0 top-11"
          />
        </div>
        {/*Bandera Argentina*/}
        <div className="ml-1 lg:ml-0">
          <img
            src={arg}
            alt=""
            className="absolute w-10 h-10 lg:h-20 lg:w-20 lg:bottom-24 lg:left-8 rounded-xl lg:top-auto top-48"
          />
          <p className="text-white text-xl font-mono underline absolute lg:bottom-16 lg:left-10 lg:top-auto">
            2024|+20 Players|Rancio Army Inc.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center gap-10 justify-start min-h-screen lg:pt-32">
        <div className="lg:flex items-center lg:gap-8 w-3/4">
          {/*img amistad*/}
          <img
            src={modo}
            alt=""
            className="rounded-2xl h-80 w-80 relative lg:right-10 lg:left-0 mb-5 lg:mb-0"
          />
          <div className="flex flex-col lg:gap-10 relative lg:top-0 gap-4">
            <p className="text-2xl font-bold text-white text-start font-serif ">
              La ronda de la amistad
            </p>
            <p className=" lg:w-2/3 w-full text-white flex items-center relative text-lg ">
              En la sombra del algarrobo, un fogón de luz prendía, y en su
              ronda, unos amigos compartían alegría. Amistad, dijo el más viejo,
              es el lazo mas sincero, no se compra con riquezas ni se paga con
              dinero. Otro gaucho respondió, con guitarra y su dulzor: Es el
              yugo en los pesares y el abrazo en el dolor. Si el camino es de
              espinas, la amistad es el sosten, que el amigo verdadero te
              levanta siempre bien.
            </p>
          </div>
        </div>
        <div className="mt-20  flex flex-col items-center">
          <p className="text-2xl text-white font-arial ">GALERIA</p>
          {/*Flechita*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            class="bi bi-chevron-down text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
        {/*img memories*/}
        <div className="lg:grid grid-cols-3 justify-center gap-10">
          {data
            ? data.slice(0, visibleImage).map((memorie, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-evenly mb-8 w-full max-w-md px-4 items-center "
                  >
                    {memorie.image ? (
                      <ModalImage
                        small={memorie.image}
                        large={memorie.image}
                        hideDownload={false}
                        hideZoom={false}
                        className="lg:w-full object-cover cursor-pointer  lg:rounded-2xl rounded-md shadow-2xl drop-shadow-md shadow-red-700 "
                      />
                    ) : (
                      <p>La imagen no ha cargado correctamente</p>
                    )}
                    <p className="absolute bg-black bg-opacity-50 justify-center bg text-xl text-center   text-white ">
                      {memorie.description}
                    </p>
                  </div>
                );
              })
            : false}
        </div>
        {/* Botón "Ver más" */}
        {data
          ? visibleImage < data.length && (
              <button
                className="text-white flex flex-col items-center"
                onClick={loadMoreImage}
              >
                Ver más...{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill "
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
            )
          : false}
      </div>
    </div>
  );
}

export default Memories;
