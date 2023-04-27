import { useState } from "react";

const week = [
  {
    day: "Segunda",
    activities: [
      {
        nome: "Musculação",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Pavilhão",
      },
      {
        nome: "Yoga",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 1",
      },
      {
        nome: "Natação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Piscina 2",
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
      },
    ],
  },
  {
    day: "Terça",
    activities: [
      {
        nome: "Cardio",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Pavilhão",
      },
      {
        nome: "Musculação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Pavilhão",
      },
      {
        nome: "Combate",
        horaInicio: "12:00",
        horaFim: "13:00",
        local: "Sala 3",
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
      },
      {
        nome: "Cardio",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Pavilhão",
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
      },
      {
        nome: "Cycling",
        horaInicio: "16:00",
        horaFim: "17:00",
        local: "Sala 2",
      },
      {
        nome: "Steping",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Sala 1",
      },
    ],
  },
  {
    day: "Quarta",
    activities: [
      {
        nome: "Zumba",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Sala 2",
      },
      {
        nome: "Yoga",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 2",
      },
      {
        nome: "RPM",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 1",
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
      },
    ],
  },
  {
    day: "Quinta",
    activities: [
      {
        nome: "Cardio",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Outdoor",
      },
      {
        nome: "Musculação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Pavilhão",
      },
      {
        nome: "Combate",
        horaInicio: "12:00",
        horaFim: "13:00",
        local: "Sala 3",
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
      },
      {
        nome: "Cardio",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Pavilhão",
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 2",
      },
      {
        nome: "Cycling",
        horaInicio: "16:00",
        horaFim: "17:00",
        local: "Sala 2",
      },
      {
        nome: "Pilates",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Sala 1",
      },
    ],
  },
  {
    day: "Sexta",
    activities: [
      {
        nome: "Zumba",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Sala 2",
      },
      {
        nome: "Steping",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Outdoor",
      },
      {
        nome: "Cardio",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 1",
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
      },
      {
        nome: "Musculação",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Pavilhão",
      },
    ],
  },
  {
    day: "Sábado",
    activities: [
      {
        nome: "Cardio",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Pavilhão",
      },
      {
        nome: "Musculação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Pavilhão",
      },
      {
        nome: "Combate",
        horaInicio: "12:00",
        horaFim: "13:00",
        local: "Sala 3",
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
      },
      {
        nome: "Cardio",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Pavilhão",
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 2",
      },
      {
        nome: "Cycling",
        horaInicio: "16:00",
        horaFim: "17:00",
        local: "Sala 2",
      },
      {
        nome: "Pilates",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Sala 1",
      },
    ],
  },
];

const activities = [
  { name: "Cardio", for: "cardio", id: "cardio" },
  { name: "Musculação", for: "musculacao", id: "musculacao" },
  { name: "Natação", for: "natacao", id: "natacao" },
  { name: "Yoga", for: "yoga", id: "yoga" },
  { name: "Combate", for: "combate", id: "combate" },
  { name: "Cycling", for: "cycling", id: "cycling" },
  { name: "Pilates", for: "pilates", id: "pilates" },
  { name: "Zumba", for: "zumba", id: "zumba" },
  { name: "Steping", for: "steping", id: "steping" },
];

function Aulas() {
  const [selectedActivity, setSelectedActivity] = useState("todas");

  const onActChange = (e) => {
    if (e !== "todas") {
      setSelectedActivity(e);
    } else {
      setSelectedActivity("todas");
    }
  };

  return (
    <div>
      <div className="mb-24 px-32">
        <h1 class="my-10 mb-16 text-center text-3xl font-extrabold text-tq1 sm:text-4xl">
          {" "}
          Marcar Aulas
        </h1>
        <div>
          <form className="text-center">
            <label for="todas" class="cursor-pointer">
              <input
                type="radio"
                name="activitie"
                id="todas"
                class="peer sr-only"
                defaultChecked
                onClick={() => onActChange("todas")}
              />
              <span class="group inline-block rounded px-10 py-3 text-sm font-medium text-tq1 outline outline-1 outline-tq1 transition hover:scale-125 peer-checked:bg-tq1 peer-checked:text-white">
                Todas
              </span>
            </label>
            {activities.map((activitie) => (
              <label for={activitie.for} class="ml-6 cursor-pointer">
                <input
                  type="radio"
                  name="activitie"
                  id={activitie.id}
                  class="peer sr-only"
                  onClick={() => onActChange(activitie.name)}
                />
                <span class="group inline-block rounded px-10 py-3 text-sm font-medium text-tq1 outline outline-1 outline-tq1 transition hover:scale-125 peer-checked:bg-tq1 peer-checked:text-white">
                  {activitie.name}
                </span>
              </label>
            ))}
          </form>
          <div className="mt-14 grid w-full grid-cols-6 gap-24 text-center">
            {week.map((week) => (
              <div>
                <div className="w-full">
                  <h1 className="mb-5 text-4xl">{week.day}</h1>
                  <div className="flex-col">
                    {week.activities.map((activitie) => (
                      <div className="flex w-full justify-between">
                        <button
                          className={`m-2 inline-block w-full justify-between rounded border px-7 py-3 text-sm font-medium shadow-black/25 transition  ${
                            !(
                              selectedActivity === "todas" ||
                              activitie.nome === selectedActivity
                            )
                              ? "cursor-not-allowed opacity-20"
                              : "hover:rotate-2 hover:scale-110 hover:bg-tq2 hover:shadow-md focus:outline-none focus:ring "
                          }`}
                        >
                          <div className="flex flex-col">
                            <h1 className="mb-3 text-xl">{activitie.nome}</h1>
                            <h1 className="text-sm text-gray-500">
                              {activitie.local}
                            </h1>
                          </div>
                          <div className="flex flex-col">
                            <h1 className="text-xs text-gray-500">
                              {activitie.horaInicio} - {activitie.horaFim}
                            </h1>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aulas;
