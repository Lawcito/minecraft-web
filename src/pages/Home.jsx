import HeroImg from "../assets/HeroImg.jpeg";
import Footer from "../components/Footer";
import convi from "../assets/convi.jpg";
import logo from "../assets/icono2.png";
import modo from "../assets/modo.png";
import hack from "../assets/hack.jpg";
import OnlinePlayers from "../components/OnlinePlayers";

function Home() {
  function copiarUrl() {
    let url = document.getElementById("url");
    let button = document.getElementById("ButonCopiar");
    navigator.clipboard.writeText(url.textContent);
    button.textContent = "copiado😎";
  }

  const rules = [
    {
      image: modo,
      type: "Modo de juego",
      rule: "No arruinar la experiencia de juego del usuario. No está permitido realizar acciones a conciencia que arruinen laexperiencia de juego de otros usuarios de cualquier forma. Esto incluye utilizar y difundir mecanismos que degraden el rendimiento del juego, no permitir finalizar la partida, entre otros",
    },
    {
      image: convi,
      type: "Convivencia",
      rule: "Estas acciones están estrictamente prohibidas: Insultos o lenguaje ofensivo, Acoso, Spam o flood en el chat(No envíar mensajes repetitivos o innecesarios),Trolleo, Robos o destrucción de construcciones. Respeta las propiedades y creaciones de los demás jugadores.",
    },
    {
      image: hack,
      type: "Hacking",
      rule: "Queda totalmente prohibido el uso de hacks, como: X-Ray: Usar mods o paquetes de texturas para localizar minerales o cofres ocultos. Kill Aura/Auto Aim: Utilizar hacks que automaticen ataques o aumenten el alcance de combate. Fly Hack: Habilidades para volar en modos no permitidos. Speed Hack: Incrementar la velocidad de movimiento de forma antinatural. Auto Clickers: Automatizar acciones como minería, combate o construcción.",
    },
  ];
  return (
    <div>
      {/* Hero */}
      <div className="hero h-screen w-screen relative z-10">
        <div
          className="absolute inset-0 h-full"
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
            zIndex: -1,
          }}
        ></div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          {/* Logo */}
          <div className="max-w-md ">
            <div className="text-[#05AF9E]  text-2xl ">
              <img src={logo} alt="" />
            </div>
            {/* Description */}
            <p className="mb-5 text-[#E0D2C3]">
              Ven y adentrate en la emocionante aventura al son de la guitarra
              payando y el sapucai de un gaucho de fondo
            </p>
            <OnlinePlayers />
            {/* Modal message */}
            <div className="mt-10 ">
              {/*Botón colaboración*/}
              <button
                className="btn bg-orange-900 text-white font-arial "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                ¿Querés colaborar?
              </button>
              <dialog id="my_modal_1" className="modal ">
                <div className="modal-box bg-black">
                  <h3 id="url" className="font-bold text-lg font-arial ">
                    0000003100030147433454
                  </h3>

                  <p className="py-4 font-arial text-green-500">
                    CVU para la causa!
                  </p>
                  <button id="ButonCopiar" onClick={copiarUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-copy"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                      />
                    </svg>
                  </button>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn bg-orange-900">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      {/* RULES */}
      <div className="h-full bg-gradient-to-r from-[#011526A1] to-[#044D8CA1] lg:flex flex-col justfiy-start items-center">
        <div className="flex items-center font-arial font-extrabold lg:ml-10 lg:mr-10 h-1/4">
          <div className="border-b lg:flex items-center gap-4 justfiy-center">
            <p className="text-6xl lg:text-8xl text-white flex justify-center mb-10 lg:mb-0">
              REGLAS
            </p>
            <p className="lg:text-xs mb-10 lg:mb-0 ml-2 mr-2 lg:ml-0 lg:mr-0">
              Bienvenidos a SapuCraft. A continuación, encontrarás una
              descripción detallada de las reglas y directrices que hemos
              establecido para garantizar una experiencia segura, respetuosa y
              agradable para todos nuestros jugadores. Estas normas están
              diseñadas para fomentar un entorno en el que todos puedan
              interactuar de manera positiva y acceder a nuestros contenidos de
              forma clara y ordenada. Te invitamos a leerlas atentamente antes
              de continuar navegando por nuestro sitio y servidor.
            </p>
          </div>
        </div>
        <div className="flex h-1/2  ">
          <div className="place-content-center">
            <div className="flex justify-evenly flex-col lg:flex-row">
              {/* Mapeo de las reglas, sus fotos y descripciones */}
              {rules.map(({ image, type, rule }, index) => {
                return (
                  <div
                    key={index}
                    className="relative group lg:w-1/4 mr-5 ml-5 lg:mr-0 lg:ml-0 cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={type}
                      className="rounded-md lg:w-full lg:h-full object-cover "
                    />
                    <p className="absolute inset-0 flex items-center lg:items-end justify-center text-white lg:text-xl font-bold text-2xl ">
                      {type}
                    </p>
                    <div className=" rounded-md lg:absolute lg:inset-0 lg:flex items-center justify-center h-full bg-gradient-to-r from-[#011526A1] to-[#044D8CA1] text-white text-lg font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 font-height lg:p-5 mb-5 lg:mb-0">
                      <p className="bg-black bg-opacity-70 lg:bg-inherit">
                        {rule}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
