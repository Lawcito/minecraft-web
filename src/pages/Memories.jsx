import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


function Memories() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "memories");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((memories) => ({ id: memories.id, ...memories.data() }))
      )
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-900 bg-no-repeat bg-cover overflow-auto">
      <div className="w-full h-screen flex flex-col items-center justify-start min-h-screen shadow-2xl pt-32  ">
      <p>MEMORIES</p>
          <div className="grid grid-cols-3 justify-center gap-10 ">
            {data
              ? data.map((memorie, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-evenly mb-8 w-full max-w-md px-4 bg-black "
                    >
                      {memorie.image ? (
                        <img src={memorie.image} alt="" className="w-auto " />
                      ) : (
                        <p>La imagen no ha cargado correctamente</p>
                      )}
                      <p className="mt-2 text-center text-white">{memorie.description}</p>
                    </div>
                  );
                })
              : false}
          </div>
        </div>
      </div>

  );
}

export default Memories;
