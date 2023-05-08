import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ModalityAddEdit() {
  const [id, setId] = useState(useParams().id);
  const location = useLocation();
  const [data, setData] = useState(
    location.state?.data || {
      classType: "",
      classDescription: "",
      locationType: "",
    }
  );

  const locationTypes = [
    {
      id: 1,
      name: "Sala",
      description: "Sala própria para aulas de grupo",
      defaultOccupancy: 20,
      defaultObservations:
        "A sala é equipada com colunas de som e espelhos, assim como halteres e colchões de Yoga.",
    },
    {
      id: 2,
      name: "Piscina",
      description: "Piscina para aulas de grupo",
      defaultOccupancy: 20,
      defaultObservations:
        "A piscina é aquecida e tem 25 metros de comprimento.",
    },
    {
      id: 3,
      name: "Ginásio",
      description: "Ginásio para aulas de grupo",
      defaultOccupancy: 20,
      defaultObservations:
        "O ginásio é equipado com máquinas de musculação e cardio.",
    },
    {
      id: 4,
      name: "Exterior",
      description: "Exterior para aulas de grupo",
      defaultOccupancy: 30,
      defaultObservations:
        "O exterior é um espaço amplo e aberto, com relva e árvores.",
    },
    {
      id: 5,
      name: "Ringue",
      description: "Ringue de combate para aulas de grupo",
      defaultOccupancy: 6,
      defaultObservations:
        "O ringue é um espaço onde normalmente se realizam aulas de combate, como boxe e kickboxing.",
    },
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-3/4 rounded-lg bg-tq2 p-8 shadow-inner ">
        <h1 className="sh relative -mt-16 mb-8 text-2xl font-bold shadow-none">
          {data?.id ? "Editar" : "Adicionar"} modalidade
        </h1>
        <form action="#" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 text-center">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Nome da modalidade</span>
              <label className="sr-only" for="id">
                Nome da modalidade
              </label>
              <input
                className="w-full rounded-lg border-tq2 p-3 text-sm"
                placeholder="0001"
                type="text"
                id="id"
                value={data.classType || null}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-center">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Descrição</span>
              <label className="sr-only" for="name">
                Descrição
              </label>
              <textarea
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                placeholder="Descrição da modalidade"
                type="text"
                id="name"
                value={data.classDescription || null}
                onChange={(e) =>
                  setData({ ...data, classDescription: e.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Tipo de espaço</span>
              <label className="sr-only" for="classType">
                Tipo de espaço
              </label>
              <select
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={data.locationType || null}
                type="text"
                id="classType"
                onChange={(e) =>
                  setData({ ...data, locationType: e.target.value })
                }
              >
                <option value="" disabled selected>
                  Selecione o tipo de espaço
                </option>
                {locationTypes.map((locationType) => (
                  <option key={locationType.id} value={locationType.name}>
                    {locationType.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">
                Descrição do espaço
              </span>
              <label className="sr-only" for="location">
                Descrição
              </label>
              <textarea
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                type="text"
                id="location"
                rows="3"
                value={
                  locationTypes.filter(
                    (locationType) => locationType.name === data.locationType
                  )[0]?.description +
                    "\n" +
                    locationTypes.filter(
                      (locationType) => locationType.name === data.locationType
                    )[0]?.defaultObservations +
                    "\n" +
                    "O espaço tem, normalmente, uma capacidade para " +
                    locationTypes.filter(
                      (locationType) => locationType.name === data.locationType
                    )[0]?.defaultOccupancy +
                    " alunos." || null
                }
                disabled
              />
            </div>
          </div>
          <div className="mt-4 ">
            <Link to={-1}>
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-tq1 px-5 py-3 font-medium text-white sm:w-auto"
                onClick={() => console.table(data)}
              >
                {data.id ? "Atualizar" : "Guardar"}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
