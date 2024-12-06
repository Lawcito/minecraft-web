import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Loading from "../components/Loading.Jsx";

function Players() {
  const [data, setData] = useState(undefined);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);

  /* Trae los datos de la base */
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "players");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((players) => ({ id: players.id, ...players.data() }))
      )
    );
  }, []);

  return (
    <div className="w-full h-full flex lg:justify-start justify-center items-center bg-gradient-to-b from-[#2D3142] to-[#4F5D75] overflow-hidden">
      {/* Donacion */}
      <div className="absolute top-14 lg:ml-10 lg:m-10 lg:w-1/6 w-4/3 h-1/3 lg:h-2/3  rounded-lg overflow-y-scroll shadow-2xl drop-shadow-md shadow-fuchsia-500 bg-gray-900 border">
        <p className="font-futura text-2xl flex justify-center mt-4 underline text-yellow-500 font-black">
          DONACIONE$
        </p>
        <ul className="mt-10 list-disc ml-5  text-white text-sm lg:text-base">
          {data
            ? [...data] // Crea una copia para no mutar el original
                .sort((a, b) => b.donation - a.donation)
                .map((player) => {
                  return (
                    <li key={player.id}>
                      {player.id + " " + "$" + player.donation}
                    </li>
                  );
                })
            : false}
        </ul>
      </div>
      {/* Swiper */}
      <div className="flex flex-col-reverse lg:flex-col lg:justify-center lg:items-end gap-4 lg:gap-32 lg:w-full w-11/12 h-full ">
        <div className="w-full lg:w-1/2 h-12 bg-[#BFC0C0] rounded-md pagination lg:mr-64">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={4}
            loop={true}
            pagination={{ clickable: true, el: ".custom-pagination" }}
          >
            {data ? (
              data.map((player) => {
                return (
                  <SwiperSlide key={player.id}>
                    <button
                      onClick={() =>
                        setCurrentPlayer({
                          id: player.id,
                          logo: player.logo,
                          skin: player.skin,
                          alias: player.alias,
                          info: player.info,
                        })
                      }
                    >
                      <div
                        className="tooltip tooltip-top z-40 lg:tooltip-right"
                        data-tip={player.id}
                      >
                        <img
                          src={player.logo}
                          alt={player.id}
                          className="h-12 z-30 rounded-md "
                        />
                      </div>
                    </button>
                  </SwiperSlide>
                );
              })
            ) : (
              <p className="flex justify-center w-full ">
                <Loading w={10}/>
              </p>
            )}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-4 "></div>
        </div>
        {/* Swiper END */}

        {/* Players information */}
        <div className="shadow-2xl drop-shadow-md shadow-fuchsia-500 w-full lg:w-3/4 h-2/4 lg:h-1/3 rounded-lg bg-gray-900 lg:mr-10">
          {currentPlayer ? (
            <div className="flex flex-wrap lg:flex-nowrap lg:h-full lg:w-full lg:justify-end p-3 gap-5">
              {/* Username */}
              <div className="text-4xl lg:text-6xl font-black font-icon text-white w-full lg:w-96">
                <p>{currentPlayer.id}</p>
                <p className="text-xl lg:text-2xl text-green-500">
                  alias: {currentPlayer.alias}{" "}
                </p>
              </div>
              <div className=" flex justify-center items-center w-full lg:w-72">
                {/* Player information */}
                <p className="text-sm lg:text-xl text-gray-200">
                  {currentPlayer.info}
                </p>
              </div>
              {/* Player skin image */}
              <div className="flex justify-center items-center w-full lg:w-80 md:w-32">
                <img src={currentPlayer.skin} alt="" className="h-40 lg:h-80  md:h-64" />
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
}

export default Players;
