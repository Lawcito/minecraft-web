import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Events() {
  const [data, setData] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(undefined);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "events");
    getDocs(queryCollection).then((res) =>
      setData(res.docs.map((events) => ({ id: events.id, ...events.data() })))
    );
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event); // Almacena el evento seleccionado
    setIsModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div className="top-0 flex">
      <div className="flex flex-col items-center justify-start min-h-screen gap-10">
        {data
          ? data.map((event, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-6 w-full h-full top-0"
                >
                  <div className="relative w-full h-full ">
                    <img
                      src={event.image}
                      alt=""
                      className="lg:h-full lg:w-full border "
                    />
                    <p
                      className="absolute bottom-screen left-10 top-20 font-sans text-white text-4xl lg:text-6xl font-bold p-2 rounded-md"
                      style={{
                        textShadow:
                          "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
                      }}
                    >
                      {event.name}
                    </p>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn absolute lg:bottom-10 lg:right-80 bg-violet-900 text-white mt-1 lg:mt-0"
                      onClick={() => openModal(event)}
                    >
                      Más información
                    </button>
                  </div>
                </div>
              );
            })
          : false}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold mb-4 text-red-500">
                  {selectedEvent?.name || "Nombre no disponible"}
                  <p className="text-yellow-500 text-sm">
                    Fecha: {selectedEvent?.date || "Fecha no disponible"}
                  </p>
                </p>
                <p className="text-blue-500">
                  Lugar: {selectedEvent?.lugar || "Lugar no disponible"}
                </p>
                <p className="text-neutral-100">
                  {selectedEvent?.description || "Descripción no disponible"}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className=""
                  onClick={closeModal} // Cierra el modal
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
