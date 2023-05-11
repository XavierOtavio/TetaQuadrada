import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function BookingAddEdit() {
  const [id, setId] = useState(useParams().id);
  const location = useLocation();
  const [data, setData] = useState(
    location.state?.data || {
      name: "",
      debt: "",
      plan: "",
      day: "",
      schedule: "",
    }
  );

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-3/4 rounded-lg bg-tq2 p-8 shadow-inner ">
        <h1 className="sh relative -mt-16 mb-8 text-2xl font-bold shadow-none">
          {data?.id ? "Editar" : "Adicionar"} cliente
        </h1>
        <form action="#" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 text-center">
            <div className="flex w-full flex-row items-center justify-center gap-4">
              <div className="h-24">
                <img
                  className="h-full rounded-full bg-contain"
                  src={`${
                    data?.id
                      ? "https://i.pravatar.cc/300"
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXo2vrSuT3xiNBgr5G4CI0PSWh0UUqjF-hg&usqp=CAU"
                  }`}
                  alt="profile"
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => document.getElementById("file").click()}
                  className="h-full w-full -translate-y-[100%] cursor-pointer rounded-full text-white opacity-0 hover:bg-slate-500/50 hover:opacity-100"
                />
                <input
                  className="hidden"
                  type="file"
                  id="file"
                  onChange={(e) => console.log(e.target.files)}
                />
              </div>
              <div className="flex w-full flex-col justify-start">
                <span className="ml-4 text-left text-xs">Nome</span>
                <label className="sr-only" for="id">
                  Nome
                </label>
                <input
                  className="w-full rounded-lg border-tq2 p-3 text-sm"
                  placeholder="Nome"
                  type="text"
                  id="id"
                  value={data.name || null}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
