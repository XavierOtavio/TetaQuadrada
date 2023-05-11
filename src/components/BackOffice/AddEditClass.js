import { useState } from "react";
import { useParams, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuro, faUser, faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function AddEditClass() {
  const params = useParams();
  const location = useLocation();
  const id = params.id === "null" ? null : params.id;
  const [data, setData] = useState(
    id
      ? location.state.data
      : {
          name: "",
          classType: "",
          Photo: "",
          schedule: [],
          hours: [],
          pt: [],
          duration: 0,
          price: [],
        }
  );

  const handleSchedule = (e) => {
    const day = e.target.value;
    if (data.schedule.includes(day)) {
      setData({
        ...data,
        schedule: data.schedule.filter((item) => item !== day),
      });
    } else {
      setData({ ...data, schedule: [...data.schedule, day] });
    }
  };

  const dayTranslator = (day) => {
    switch (day) {
      case "monday":
        return "Segunda";
      case "tuesday":
        return "Terça";
      case "wednesday":
        return "Quarta";
      case "thursday":
        return "Quinta";
      case "friday":
        return "Sexta";
      case "saturday":
        return "Sábado";
      case "sunday":
        return "Domingo";
      default:
        return "Dia";
    }
  };

  const handleHours = (e, i) => {
    const hours = [...data.hours];
    hours[i] = e.target.value;
    setData({ ...data, hours: hours });
  };

  const handlePrice = (e, i) => {
    const price = [...data.price];
    price[i] = e.target.value;
    setData({ ...data, price: price });
  };

  const handlePT = (e, i) => {
    const pt = [...data.pt];
    pt[i] = e.target.value;
    setData({ ...data, pt: pt });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-3/4 rounded-lg bg-tq2 p-8 shadow-inner ">
        <h1 className="sh relative -mt-16 mb-8 text-2xl font-bold shadow-none">
          {id ? "Editar" : "Adicionar"}
        </h1>
        <form action="#" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Nome da aula</span>
              <label className="sr-only" for="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border-tq2 p-3 text-sm"
                placeholder="Nome"
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs">Duração em minutos</span>
              <label className="sr-only" for="name">
                Duração
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Duração em minutos"
                value={data.duration}
                type="number"
                id="name"
                min="0"
                max="120"
              />
            </div>
          </div>
          <p className="pt-4 text-left font-bold">Categoria</p>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-4">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                tabindex="-1"
                name="option"
                checked={data.classType === "Natação" || null}
                onChange={() => setData({ ...data, classType: "Natação" })}
              />

              <label
                for="option1"
                className="hover:border-text-tq1 block w-full rounded-lg border border-gray-200 p-3 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Natação </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option2"
                type="radio"
                tabindex="-1"
                name="option"
                value={"Cardio"}
                checked={data.classType === "Cardio" || null}
                onChange={() => setData({ ...data, classType: "Cardio" })}
              />

              <label
                for="option2"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Cardio </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
                tabindex="-1"
                name="option"
                value={"Combate"}
                checked={data.classType === "Combate" || null}
                onChange={() => setData({ ...data, classType: "Combate" })}
              />

              <label
                for="option3"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Combate </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="option4"
                type="radio"
                tabindex="-1"
                name="option"
                value={"Musculação"}
                checked={data.classType === "Musculação" || null}
                onChange={() => setData({ ...data, classType: "Musculação" })}
              />

              <label
                for="option4"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Musculação </span>
              </label>
            </div>
          </div>
          <p className="pt-4 text-left font-bold">Horário</p>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-6">
            <div>
              <input
                className="peer sr-only"
                id="day1"
                type="checkbox"
                tabindex="-1"
                name="option"
                value={"monday"}
                checked={data.schedule.includes("monday") || null}
                onChange={(e) => handleSchedule(e)}
              />

              <label
                for="day1"
                className="peer-checked:border-tq peer-checked:bg-tq border-gray border-200 block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Segunda </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="day2"
                type="checkbox"
                tabindex="-1"
                name="option"
                value={"tuesday"}
                checked={data.schedule.includes("tuesday") || null}
                onChange={(e) => handleSchedule(e)}
              />

              <label
                for="day2"
                className="peer-checked:border-tq peer-checked:bg-tq border-gray border-200 block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Terça </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="day3"
                type="checkbox"
                tabindex="-1"
                name="option"
                value={"wednesday"}
                checked={data.schedule.includes("wednesday") || null}
                onChange={(e) => handleSchedule(e)}
              />
              <label
                for="day3"
                className="peer-checked:border-tq peer-checked:bg-tq border-gray border-200 block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Quarta </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="day4"
                type="checkbox"
                tabindex="-1"
                name="option"
                value={"thursday"}
                checked={data.schedule.includes("thursday") || null}
                onChange={(e) => handleSchedule(e)}
              />
              <label
                for="day4"
                className="peer-checked:border-tq peer-checked:bg-tq border-gray border-200 block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Quinta </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="day5"
                type="checkbox"
                tabindex="-1"
                name="option"
                value={"friday"}
                checked={data.schedule.includes("friday") || null}
                onChange={(e) => handleSchedule(e)}
              />
              <label
                for="day5"
                className="peer-checked:border-tq peer-checked:bg-tq border-gray border-200 block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Sexta </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="day6"
                type="checkbox"
                tabindex="-1"
                name="option"
                value={"saturday"}
                checked={data.schedule.includes("saturday") || null}
                onChange={(e) => handleSchedule(e)}
              />
              <label
                for="day6"
                className="peer-checked:border-tq peer-checked:bg-tq border-gray border-200 block w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium"> Sábado </span>
              </label>
            </div>
          </div>
          {data.schedule.length ? (
            <div className="mt-4">
              <p className="pt-4 text-left font-bold">
                Horário - Mais detalhes
              </p>
              <div>
                {data.schedule.map((day, i) => (
                  <div
                    className="mb-2 grid grid-cols-1 gap-4 text-left"
                    key={`ID${i}`}
                  >
                    <div className="inline-flex items-center justify-around gap-2">
                      <div className="relative inline-flex h-16 w-full items-center justify-center rounded-lg peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white">
                        <FontAwesomeIcon
                          icon={faBookOpen}
                          className="absolute right-4 h-4 w-4"
                        />
                        <label
                          className="block h-16 w-full rounded-lg border border-gray-200 bg-white p-3 pr-8 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                          tabindex="0"
                        >
                          <span className="flex h-full flex-col items-start justify-center text-sm font-medium">
                            {dayTranslator(day)}
                          </span>
                        </label>
                      </div>
                      <input
                        id="startingHour"
                        type="time"
                        tabindex="-1"
                        value={data.hours[i]}
                        className="block h-16 w-full rounded-lg border border-gray-200 p-3 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                        name="startingHour"
                        onChange={(e) => handleHours(e, i)}
                      />
                      <div className="relative inline-flex h-16 w-full items-center justify-center rounded-lg peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="absolute right-4 h-4 w-4"
                        />
                        <select
                          value={data.pt[i]}
                          onChange={(e) => handlePT(e, i)}
                          className="block h-16 w-full rounded-lg border border-gray-200 p-3 pr-8 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                        >
                          <option selected disabled value="-1">
                            Selecione
                          </option>
                          <option value="1000">José</option>
                          <option value="1001">Maria</option>
                          <option value="1002">Ambrósio</option>
                        </select>
                      </div>
                      <div className="relative inline-flex h-16 w-full items-center justify-center rounded-lg peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white">
                        <input
                          id="price"
                          type="number"
                          className="block h-full w-full rounded-lg border border-gray-200 p-3 pr-8 hover:border-tq1 peer-checked:border-tq1 peer-checked:bg-tq1 peer-checked:text-white"
                          tabindex="-1"
                          value={data.price[i] || ""}
                          placeholder="Preço"
                          name="price"
                          onChange={(e) => handlePrice(e, i)}
                        />
                        <FontAwesomeIcon
                          icon={faEuro}
                          className="absolute right-4 h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-4 ">
            <button
              type="button"
              className="inline-block w-full rounded-lg bg-tq1 px-5 py-3 font-medium text-white sm:w-auto"
              onClick={() => console.table(data)}
            >
              {id ? "Atualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
