import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { addMinutes, format } from "date-fns";
import { Link } from "react-router-dom";

export default function Coaches() {
  const [classes, setCoaches] = useState([
    {
      id: "0001",
      classType: "Natação",
      name: "João Silva",
      Photo:
        "https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg",
      class: "Natação Livre, Ginastica Hídrica",
      schedule: ["monday", "tuesday", "wednesday"],
      hours: ["18:00", "18:00", "18:00"],
      duration: 60,
      pt: [1000, 1001, 1000],
    },
    {
      id: "0002",
      classType: "Personal Trainer",
      name: "Manuel Gomes",
      Photo:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      class: "Avaliação fisica, Acompanhamento individualizado",
      schedule: ["monday", "tuesday", "friday"],
      hours: ["18:00", "19:00", "11:00"],
      duration: 45,
      pt: [1000, 1002, 1001],
    },
    {
      id: "0003",
      classType: "Cardio",
      name: "Cuca Beludo",
      Photo:
        "https://www.thehealthjournals.com/wp-content/uploads/2016/03/Sarah.jpg",
      class: "Cycling, Steping",
      schedule: ["tuesday", "thursday", "friday"],
      hours: ["12:00", "14:00", "13:00"],
      duration: 55,
      pt: [1000, 1002, 1001],
    },
    {
      id: "0004",
      classType: "Nutricionista",
      name: "Ana Maria",
      Photo:
        "https://embodyfitness.ae/wp-content/uploads/2022/08/Jess-Trainer-Image-scaled.jpg",
      class: "Acompanhamento nutricional",
      schedule: ["monday", "tuesday", "saturday"],
      hours: ["11:00", "11:00", "11:00"],
      duration: 30,
      pt: [1000, 1002, 1001],
    },
    {
      id: "0005",
      classType: "Combate",
      name: "Jorge Couto",
      Photo:
        "https://www.fitsquad.ca/wp-content/uploads/2020/11/Sathish-personal-trainer-profile.jpg",
      class: "kickboxing, Boxe, Muay Thai",
      schedule: ["monday", "tuesday", "friday"],
      hours: ["18:00", "19:00", "11:00"],
      duration: 90,
      pt: [1000, 1002, 1001],
    },
    {
      id: "0006",
      classType: "Musculação",
      name: "Armando Pinto",
      Photo:
        "https://acefitnessmediastorage.blob.core.windows.net/acepublicfiles/2a970ee8-4320-4958-a8cb-e372de6c7ee6.jpg",
      class: "Hipertrofia, Potencia, Resistencia",
      schedule: ["monday", "tuesday", "friday"],
      hours: ["18:00", "19:00", "11:00"],
      duration: 60,
      pt: [1000, 1002, 1001],
    },
  ]);
  const scheduleFormater = (train) => {
    const schedule = train.schedule;
    const hours = train.hours;
    let hour = new Date();
    let days = {
      monday: "Segunda",
      tuesday: "Terça",
      wednesday: "Quarta",
      thursday: "Quinta",
      friday: "Sexta",
      saturday: "Sábado",
      sunday: "Domingo",
    };
    let formatedSchedule = [];
    schedule.forEach((day, index) => {
      hour = new Date(`01-01-01 ${train.hours[index]}`);
      formatedSchedule.push(
        `${days[day]} das ${hours[index]}h às  ${format(
          addMinutes(hour, train.duration),
          "HH:mm"
        )}h`
      );
    });
    return formatedSchedule.join("\n");
  };

  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="bg-thc3 inline-flex h-full w-full items-center justify-between rounded-xl bg-tq2 p-8 px-10 shadow-inner ">
          <div className="flex h-full w-full items-center">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-thc2 absolute ml-2 h-6 w-6"
            />
            <input
              className="focus:ring-thc2 flex h-10 w-64 items-center rounded border border-tq1 bg-white pl-10 text-sm font-normal text-tq1 focus:outline-none focus:ring"
              placeholder="Por id ou nome do treinador"
            />
          </div>

          <div className="flex h-full w-full items-center justify-end">
            <Link to={`/dashboard/classes/${null}`} state={{ data: null }}>
              <button
                type="button"
                className="relative flex h-10 w-32 items-center rounded border border-tq1 bg-white px-3 text-sm font-normal text-tq1 shadow"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute right-0 mr-3 h-6 w-6"
                />
                Adicionar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-end-12 row-start-2 row-end-7">
        <table className="bg-thc4 h-full w-full divide-y-2 rounded-xl bg-tq2 p-8 text-sm shadow-inner">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium  text-tq1">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                {" "}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Nome
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Categoria
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Aulas
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Horário aulas
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {classes.map((training) => (
              <tr key={training.id} className="border-b">
                <td className="whitespace-nowrap px-4 py-2">{training.id}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <img
                    src={training.Photo}
                    alt={training.id}
                    className="h-16 w-16 rounded-full"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2">{training.name}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {training.classType}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {training.class}
                </td>
                <td className="whitespace-break-spaces px-4 py-2">
                  {scheduleFormater(training)}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    to={`/dashboard/coaches/${training.id}`}
                    state={{ data: training }}
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className="h-6 w-6 cursor-pointer text-blue-700"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      setCoaches(classes.filter((c) => c.id !== training.id));
                    }}
                    className="ml-2 h-6 w-6 cursor-pointer text-red-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
