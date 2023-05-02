import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function BookingAddEdit() {
  const [id, setId] = useState(useParams().id);
  const location = useLocation();
  const [data, setData] = useState(
    location.state?.data || {
      name: "",
      classType: "",
      location: "",
      day: "",
      schedule: "",
    }
  );
  const users = [
    {
      id: 1,
      name: "João",
    },
    {
      id: 2,
      name: "Maria",
    },
    {
      id: 3,
      name: "Daniel",
    },
    {
      id: 4,
      name: "Carlos",
    },
    {
      id: 5,
      name: "Marcos",
    },
  ];

  const rooms = [
    {
      name: "Yoga",
      location: "Sala 1",
      occupancy: 10,
    },
    {
      name: "Zumba",
      location: "Sala 2",
      occupancy: 15,
    },
    {
      name: "Natação Livre",
      location: "Piscina",
      occupancy: 25,
    },
    {
      name: "Musculação",
      location: "Ginásio",
      occupancy: 20,
    },
  ];

  const classes = [
    {
      classType: "Yoga",
      location: "Sala 1",
      day: ["Terça-feira", "Quinta-feira"],
      schedule: ["10:00", "14:00", "15:00"],
    },
    {
      classType: "Zumba",
      location: "Sala 2",
      day: ["Quarta-feira", "Sexta-feira"],
      schedule: ["9:00", "12:00", "16:00"],
    },
    {
      classType: "Natação Livre",
      location: "Piscina",
      day: ["Segunda-feira", "Quarta-feira", "Sexta-feira"],
      schedule: ["10:00", "14:00", "15:00"],
    },
    {
      classType: "Musculação",
      location: "Ginásio",
      day: [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
      ],
      schedule: ["10:00", "14:00", "15:00"],
    },
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-3/4 rounded-lg bg-tq2 p-8 shadow-inner ">
        <h1 className="sh relative -mt-16 mb-8 text-2xl font-bold shadow-none">
          {data?.id ? "Editar" : "Adicionar"} marcação
        </h1>
        <form action="#" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Número de cliente</span>
              <label className="sr-only" for="id">
                Name
              </label>
              <input
                className="w-full rounded-lg border-tq2 p-3 text-sm"
                placeholder="0001"
                type="number"
                id="id"
                min="1"
                max="5"
                value={data.id || null}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Nome do cliente</span>
              <label className="sr-only" for="name">
                Duração
              </label>
              <input
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={users[id - 1]?.name || null}
                type="text"
                id="name"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Tipo de aula</span>
              <label className="sr-only" for="classType">
                Tipo de aula
              </label>
              <select
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={data.classType || null}
                type="text"
                id="classType"
                onChange={(e) =>
                  setData({ ...data, classType: e.target.value })
                }
              >
                {classes.map((classType) => (
                  <option value={classType.classType}>
                    {classType.classType}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Localização</span>
              <label className="sr-only" for="location">
                Localização
              </label>
              <input
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={
                  rooms?.filter((room) => room.name === data.classType)[0]
                    ?.location ||
                  data?.location ||
                  rooms[0].location
                }
                type="text"
                id="location"
                disabled
              />
            </div>
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Ocupação</span>
              <label className="sr-only" for="occupation">
                Ocupação
              </label>
              <input
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={
                  Math.floor(
                    Math.random() *
                      rooms?.filter((room) => room.name === data.classType)[0]
                        ?.occupancy || rooms[0].occupancy
                  ) -
                  1 +
                  "/" +
                  (rooms?.filter((room) => room.name === data.classType)[0]
                    ?.occupancy || rooms[0].occupancy)
                }
                type="text"
                id="occupation"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Dia</span>
              <label className="sr-only" for="day">
                Dia
              </label>
              <select
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={data.day || null}
                id="day"
                onChange={(e) => setData({ ...data, day: e.target.value })}
              >
                {classes
                  .filter((classe) => classe.classType === data.classType)[0]
                  ?.day.map((day) => (
                    <option key={day.name} value={day}>
                      {day}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Horário</span>
              <label className="sr-only" for="schedule">
                Horário
              </label>
              <select
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                value={data.schedule || null}
                id="schedule"
                onChange={(e) => setData({ ...data, schedule: e.target.value })}
              >
                {classes
                  .filter((classe) => classe.classType === data.classType)[0]
                  ?.schedule.map((schedule) => (
                    <option key={schedule.name} value={schedule}>
                      {schedule}
                    </option>
                  ))}
              </select>
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
