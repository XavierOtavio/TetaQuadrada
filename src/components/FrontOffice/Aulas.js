import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import ClassModal from "./ClassModal";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const week = [
  {
    day: "Segunda",
    activities: [
      {
        nome: "Musculação",
        horaInicio: "10:00",
        horaFim: "11:00",
        local: "Pavilhão",
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 3,
      },
      {
        nome: "Yoga",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 1",
        prof: "Maria Santos",
        lotacao: "7/15",
        avaliable: true,
        equipamento: ["Tapete", "Bola"],
        price: 6,
      },
      {
        nome: "Natação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Piscina 2",
        prof: "João Silva",
        lotacao: "5/10",
        avaliable: true,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 4,
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
        prof: "Pedro Fernandes",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 5,
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
        prof: "Manuel Santos",
        lotacao: "10/10",
        avaliable: false,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 6,
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
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 3,
      },
      {
        nome: "Musculação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Pavilhão",
        prof: "Maria Santos",
        lotacao: "10/30",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 4,
      },
      {
        nome: "Combate",
        horaInicio: "12:00",
        horaFim: "13:00",
        local: "Sala 3",
        prof: "João Silva",
        lotacao: "6/14",
        avaliable: true,
        equipamento: ["Saco", "Luvas"],
        price: 4,
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
        prof: "Pedro Fernandes",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 7,
      },
      {
        nome: "Cardio",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Pavilhão",
        prof: "Manuel Santos",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 7,
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
        prof: "João Silva",
        lotacao: "3/10",
        avaliable: true,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 4,
      },
      {
        nome: "Cycling",
        horaInicio: "16:00",
        horaFim: "17:00",
        local: "Sala 2",
        prof: "Maria Santos",
        lotacao: "25/25",
        avaliable: false,
        equipamento: ["Bicicleta"],
        price: 6,
      },
      {
        nome: "Steping",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Sala 1",
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 9,
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
        prof: "João Silva",
        lotacao: "15/15",
        avaliable: false,
        equipamento: ["Tapete"],
        price: 3,
      },
      {
        nome: "Yoga",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 2",
        prof: "Maria Santos",
        lotacao: "10/15",
        avaliable: true,
        equipamento: ["Tapete", "Bola"],
        price: 4,
      },
      {
        nome: "RPM",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 1",
        prof: "João Silva",
        lotacao: "10/10",
        avaliable: false,
        equipamento: ["Bicicleta"],
        price: 4,
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
        prof: "Pedro Fernandes",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 7,
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
        prof: "Manuel Santos",
        lotacao: "10/10",
        avaliable: false,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 8,
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
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 3,
      },
      {
        nome: "Musculação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Pavilhão",
        prof: "Maria Santos",
        lotacao: "10/30",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 4,
      },
      {
        nome: "Combate",
        horaInicio: "12:00",
        horaFim: "13:00",
        local: "Sala 3",
        prof: "João Silva",
        lotacao: "6/14",
        avaliable: true,
        equipamento: ["Saco", "Luvas"],
        price: 6,
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
        prof: "Pedro Fernandes",
        lotacao: "25/25",
        avaliable: false,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 6,
      },
      {
        nome: "Cardio",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Pavilhão",
        prof: "Manuel Santos",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 5,
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 2",
        prof: "João Silva",
        lotacao: "3/10",
        avaliable: true,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 5,
      },
      {
        nome: "Cycling",
        horaInicio: "16:00",
        horaFim: "17:00",
        local: "Sala 2",
        prof: "Maria Santos",
        lotacao: "25/25",
        avaliable: false,
        equipamento: ["Bicicleta"],
        price: 8,
      },
      {
        nome: "Pilates",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Sala 1",
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Tapete", "Bola"],
        price: 8,
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
        prof: "João Silva",
        lotacao: "15/15",
        avaliable: false,
        equipamento: ["Tapete"],
        price: 3,
      },
      {
        nome: "Steping",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Outdoor",
        prof: "Maria Santos",
        lotacao: "10/15",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 4,
      },
      {
        nome: "Cardio",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Sala 1",
        prof: "João Silva",
        lotacao: "10/10",
        avaliable: false,
        equipamento: ["Banco", "Passadeira"],
        price: 4,
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
        prof: "Pedro Fernandes",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 7,
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 1",
        prof: "Manuel Santos",
        lotacao: "10/10",
        avaliable: false,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 7,
      },
      {
        nome: "Musculação",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Pavilhão",
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 10,
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
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 7,
      },
      {
        nome: "Musculação",
        horaInicio: "11:00",
        horaFim: "12:00",
        local: "Pavilhão",
        prof: "Maria Santos",
        lotacao: "10/30",
        avaliable: true,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 8,
      },
      {
        nome: "Combate",
        horaInicio: "12:00",
        horaFim: "13:00",
        local: "Sala 3",
        prof: "João Silva",
        lotacao: "6/14",
        avaliable: true,
        equipamento: ["Saco", "Luvas"],
        price: 8,
      },
      {
        nome: "Musculação",
        horaInicio: "13:00",
        horaFim: "14:00",
        local: "Pavilhão",
        prof: "Pedro Fernandes",
        lotacao: "25/25",
        avaliable: false,
        equipamento: ["Banco", "Barras", "Halteres", "Bola"],
        price: 9,
      },
      {
        nome: "Cardio",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Pavilhão",
        prof: "Manuel Santos",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Banco", "Passadeira"],
        price: 10,
      },
      {
        nome: "Natação",
        horaInicio: "14:00",
        horaFim: "15:00",
        local: "Piscina 2",
        prof: "João Silva",
        lotacao: "3/10",
        avaliable: true,
        equipamento: ["Prancha", "Palas", "Barbatanas"],
        price: 10,
      },
      {
        nome: "Cycling",
        horaInicio: "16:00",
        horaFim: "17:00",
        local: "Sala 2",
        prof: "Maria Santos",
        lotacao: "25/25",
        avaliable: false,
        equipamento: ["Bicicleta"],
        price: 11,
      },
      {
        nome: "Pilates",
        horaInicio: "18:00",
        horaFim: "19:00",
        local: "Sala 1",
        prof: "João Silva",
        lotacao: "10/25",
        avaliable: true,
        equipamento: ["Tapete", "Bola"],
        price: 10,
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

function Aulas(props) {
  const [isLogged, setIsLogged] = props.isLogged;
  const [selectedActivity, setSelectedActivity] = useState("todas");
  const [choosedPlan, setChoosedPlan] = props.choosedPlan;
  const [openClassModal, setOpenClassModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const navigate = useNavigate();

  const onActChange = (e) => {
    if (e !== "todas") {
      setSelectedActivity(e);
    } else {
      setSelectedActivity("todas");
    }
  };

  const handleClassClick = (e) => {
    if (isLogged) {
      setModalData(e);
      setOpenClassModal(true);
      console.table(e);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {openClassModal ? (
        <div className="absolute z-10 h-screen w-full">
          <ClassModal
            openClassModal={[openClassModal, setOpenClassModal]}
            modalData={[modalData, setModalData]}
            choosedPlan={[choosedPlan, setChoosedPlan]}
          />
        </div>
      ) : null}
      <div className="mb-24 px-32">
        <h1 class="my-10 mb-16 text-center text-3xl font-extrabold text-tq1 sm:text-4xl">
          {" "}
          Aulas de Grupo
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
                          onClick={() => handleClassClick(activitie)}
                          className={`m-2 inline-block w-full justify-between ${
                            activitie.avaliable
                              ? ""
                              : " border-red-600 bg-red-600/25 hover:bg-red-600/25"
                          } rounded border px-7 py-3 text-sm font-medium shadow-black/25 transition  ${
                            !(
                              selectedActivity === "todas" ||
                              activitie.nome === selectedActivity
                            )
                              ? "cursor-not-allowed opacity-20"
                              : "hover:rotate-2 hover:scale-110 hover:bg-gray-200 hover:shadow-md focus:outline-none focus:ring"
                          }`}
                        >
                          <div className="flex flex-col">
                            <h1 className="text-xl">{activitie.nome}</h1>
                            <h1 className="mb-3 text-sm text-gray-500">
                              {activitie.local}
                            </h1>
                            <h1 className="text-sm text-gray-500">
                              {activitie.prof}
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
