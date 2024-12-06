import React, { useEffect, useState } from "react";
import pingImg from "../assets/minecraftPing.png";
import Loading from "./Loading";

function OnlinePlayers() {
  const [status, setStatus] = useState(undefined);
  const [hoverStatus, setHoverStatus] = useState(undefined);
  async function fetchStatus() {
    await fetch(
      "https://mcapi.us/server/status?ip=" +
        "45.235.99.242" +
        "&port=" +
        "28584"
    )
      .then((response) => response.json())
      .then((data) => setStatus(data.players.sample));
  }

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="flex justify-center items-center relative gap-2 text-white">
      <div className="flex gap-2">
        <p>Jugadores en linea</p>
        <p>{status ? status.length : <Loading w={10} />}/22</p>
      </div>
      <div
        className="cursor-pointer flex gap-2 items-center"
        onMouseEnter={() => setHoverStatus(true)}
        onMouseLeave={() => setHoverStatus(false)}
      >
        <img src={pingImg} alt="" className="h-5" />

        <div>
          <div>
            {status && hoverStatus && (
              <div className="absolute lg:top-0 top-5 right-5 lg:left-80 bg-neutral-900 border border-gray-300 rounded p-2 w-1/2">
                {status.length > 0 ? (
                  status.map((player, index) => (
                    <p key={index}>{player.name}</p>
                  ))
                ) : (
                  <p>No hay nadie</p>
                )}
              </div>
            )}
          </div>
          {/*  {status ? (
            hoverStatus ? (
              <div className="absolute lg:top-0 top-5 right-5 lg:left-80 bg-neutral-900 border border-gray-300 rounded p-2 w-1/2">
              {status.length > 0 ? (
                status.map((player, index) => {
                  return (
                    <p key={index} className="">
                    {player.name}
                    </p>
                    );
                    })
                    ) : (
                      <p>No hay nadie</p>
                      )}
                      </div>
                      ) : (
                        false
                        )
                        ) : (
                          false
                          )} */}
        </div>
      </div>
    </div>
  );
}

export default OnlinePlayers;
