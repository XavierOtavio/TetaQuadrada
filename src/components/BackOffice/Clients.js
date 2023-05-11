import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEye,
  faTrash,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CHECKBOX_STATES = {
  Checked: "Checked",
  Indeterminate: "Indeterminate",
  Empty: "Empty",
};

export default function Booking() {
  const onChangeCheckbox = () => {
    let updatedCheck;
    if (checked === CHECKBOX_STATES.Checked) {
      updatedCheck = CHECKBOX_STATES.Empty;
    } else if (checked === CHECKBOX_STATES.Empty) {
      updatedCheck = CHECKBOX_STATES.Indeterminate;
    } else if (checked === CHECKBOX_STATES.Indeterminate) {
      updatedCheck = CHECKBOX_STATES.Checked;
    }

    setChecked(updatedCheck);
  };
  const [checked, setChecked] = useState(CHECKBOX_STATES.Empty);
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "João",
      classType: "Yoga",
      location: "Sala 1",
      day: "2021-10-10",
      schedule: "10:00",
      contacto: "912853988",
      email: "joao@mail.org",
    },
    {
      id: 2,
      name: "Maria",
      classType: "Musculação",
      location: "Ginásio",
      day: "2021-10-10",
      schedule: "10:00",
      contacto: "912456788",
      email: "maria@mail.org",
    },
    {
      id: 3,
      name: "Daniel",
      classType: "Zumba",
      location: "Sala 2",
      day: "2021-10-10",
      schedule: "9:00",
      contacto: "912873478",
      email: "daniel@mail.org",
    },
    {
      id: 4,
      name: "Carlos",
      classType: "Yoga",
      location: "Sala 1",
      day: "2021-10-10",
      schedule: "10:00",
      contacto: "914455678",
      email: "carlos@mail.org",
    },
    {
      id: 5,
      name: "Marcos",
      classType: "Natação Livre",
      location: "Piscina",
      day: "2021-10-10",
      schedule: "10:00",
      contacto: "912736478",
      email: "marcos@mail.org",
    },
  ]);

  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="bg-thc3 inline-flex h-full w-full items-center justify-between rounded-xl bg-tq2 p-8 px-10 shadow-inner ">
          <div className="flex flex-col justify-start">
            <span className="ml-4 text-left text-xs font-bold">
              Filtrar por ID ou nome do cliente:
            </span>
            <div className="flex h-full w-full items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-thc2 absolute ml-2 h-6 w-6"
              />
              <input
                className="flex h-10 w-64 items-center rounded border border-tq1 bg-white pl-10 text-sm font-normal text-tq1 focus:outline-none focus:ring"
                placeholder="John Johnson"
              />
            </div>
          </div>
          <div className="flex w-full  items-center justify-center text-sm">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs font-bold">
                Filtrar por subscrição:
              </span>
              <select className="flex h-10 w-64 items-center rounded border border-tq1 bg-white px-3 text-sm font-normal text-tq1 focus:outline-none focus:ring">
                <option>Todos</option>
                <option value="Plano1">Finess Floris</option>
                <option value="Plano2">Morks Gorlassions</option>
                <option value="Plano2">Mifas Masters</option>
                <option value="">S/ subscrição</option>
              </select>
            </div>
          </div>
          <div className="flex w-full items-center justify-center text-sm">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs font-bold">
                Tem valor em dívida:
              </span>
              <div className="flex h-full w-full items-center">
                <Checkbox value={checked} onChange={onChangeCheckbox} />
                <p className="ml-4 text-left text-lg">
                  {checked === "Empty"
                    ? "Todos"
                    : checked === "Indeterminate"
                    ? "Não"
                    : "Sim"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-end">
            <Link to={`/dashboard/client/${null}`}>
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
                Nome
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Aula
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Horário
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Localização
              </th>
              <th className="whitespace-nowrap px-8 py-2 text-left font-medium text-tq1">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {clients.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="whitespace-nowrap px-4 py-2">{booking.id}</td>

                <td className="whitespace-nowrap px-4 py-2">{booking.name}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {booking.classType}
                </td>
                <td className="whitespace-break-spaces px-4 py-2">
                  {booking.day + " " + booking.schedule}
                </td>
                <td className="whitespace-break-spaces px-4 py-2">
                  {booking.location}
                </td>
                <td className="whitespace-nowrap px-8 py-2">
                  <Link
                    to={`/dashboard/booking/${booking.id}`}
                    state={{ data: booking }}
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className="h-6 w-6 cursor-pointer text-blue-700"
                    />
                  </Link>
                  <Link to={`tel:${booking.contacto}`}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="ml-2 h-6 w-6 cursor-pointer text-green-700"
                    />
                  </Link>
                  <Link to={`mailto:${booking.email}`}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="ml-2 h-6 w-6 cursor-pointer text-yellow-700"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      setClients(clients.filter((b) => b.id !== booking.id));
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

const Checkbox = ({ value, onChange }) => {
  const checkboxRef = useRef();

  useEffect(() => {
    if (value === CHECKBOX_STATES.Checked) {
      checkboxRef.current.checked = true;
      checkboxRef.current.indeterminate = false;
    } else if (value === CHECKBOX_STATES.Empty) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (value === CHECKBOX_STATES.Indeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [value]);

  return <input ref={checkboxRef} type="checkbox" onChange={onChange} />;
};
