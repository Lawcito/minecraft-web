import React from "react";
import voice from "../assets/voice.png";
import wither from "../assets/wither.webp";
import funri from "../assets/funri.webp";
import enderdragon from "../assets/enderdragon.webp";
import moddo from "../assets/moddo.jpg";

function Mods() {
  const carta = [
    {
      img: voice,
      href: "https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat",
      data: "Voice Chat!",
      datas: "Un simple chat de voz que funciona con proximidad!",
    },
    {
      img: wither,
      href: "https://modrinth.com/datapack/withering-heights",
      data: "Withering!",
      datas: "Para convertir a Wither en algo digno de llamar BOSS.",
    },
    {
      img: funri,
      href: "https://modrinth.com/datapack/ketkets-furnicraft",
      data: "FurniCraft!",
      datas:
        "Amuebla tus creaciones con una amplia variedad de muebles únicos en estilo vainilla.",
    },
    {
      img: enderdragon,
      href: "https://modrinth.com/datapack/edf-remastered",
      data: "Ender Dragon Fight Remastered!",
      datas:
        "Un aumento de dificultad del BOSS final de Minecraft, con un enfoque en una sensación un tanto vainilla.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 w-full h-full   ">
      <img src={moddo} alt="" />
      <div className="flex flex-col gap-10 ">
        {carta.map(({ img, href, data, datas }, index) => {
          return (
            <div className="">
              <div
                key={index}
                className=" flex gap-10 card card-side text-white rounded-lg bg-gray-900 w-full shadow-md  drop-shadow-md shadow-fuchsia-500 "
              >
                <figure className="ml-6">
                  <img className="h-32 w-32 " src={img} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl underline">{data} </h2>
                  <p className="text-fuchsia-500">{datas} </p>
                  <div className="card-actions justify-end ">
                    <a href={href} target="_blank">
                      <div className="">
                        <a className="link link-accent font-serif">
                          Visitar página para más información.
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mods;
