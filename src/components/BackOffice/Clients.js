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

export default function Client() {
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
      gender: "M",
      debt: -42.5,
      contacto: "912853988",
      plan: "",
      lastSeen: "50",
      email: "joao@mail.org",
    },
    {
      id: 2,
      name: "Maria",
      gender: "F",
      debt: 0,
      contacto: "912456788",
      plan: "plano3",
      lastSeen: "1",
      email: "maria@mail.org",
    },
    {
      id: 3,
      name: "Daniel",
      gender: "M",
      debt: 0,
      contacto: "912873478",
      plan: "plano1",
      lastSeen: "7",
      email: "daniel@mail.org",
    },
    {
      id: 4,
      name: "Carlos",
      gender: "M",
      debt: 0,
      contacto: "914455678",
      plan: "plano2",
      lastSeen: "45",
      email: "carlos@mail.org",
    },
    {
      id: 5,
      name: "Marcos",
      gender: "M",
      debt: 0,
      contacto: "912736478",
      plan: "plano3",
      lastSeen: "17",
      email: "marcos@mail.org",
    },
  ]);

  return (
    <div className="grid h-full w-full grid-cols-12 grid-rows-6 items-start gap-10 py-10">
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 h-full">
        <div className="bg-thc3 inline-flex h-full w-full items-center justify-between rounded-xl bg-tq2 p-8 px-10 shadow-inner ">
          <div className="flex flex-col justify-start">
            <span className="ml-4 text-left text-xs font-bold sm:sr-only">
              Filtrar por ID ou nome do cliente:
            </span>
            <div className="flex h-full w-full items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-thc2 absolute ml-2 h-6 w-6"
              />
              <input
                className="flex h-10 w-64 items-center rounded border border-tq1 bg-white pl-10 text-sm font-normal text-tq1 focus:outline-none focus:ring sm:w-32"
                placeholder="John Johnson"
              />
            </div>
          </div>
          <div className="flex w-full  items-center justify-center text-sm">
            <div className="flex flex-col justify-start">
              <span className="ml-4 text-left text-xs font-bold sm:sr-only">
                Filtrar por subscrição:
              </span>
              <select className="flex h-10 w-64 items-center rounded border border-tq1 bg-white px-3 text-sm font-normal text-tq1 focus:outline-none focus:ring sm:w-32">
                <option>Todos</option>
                <option value="plano1">Finess Floris</option>
                <option value="plano2">Morks Gorlassions</option>
                <option value="plano3">Mifas Masters</option>
                <option value="">S/ subscrição</option>
              </select>
            </div>
          </div>
          <div className="flex w-full items-center justify-center text-sm">
            <div className="flex flex-col justify-start">
              <span className="text-left text-xs font-bold">
                Tem valor em dívida:
              </span>
              <div className="flex h-full w-full items-center">
                <Checkbox value={checked} onChange={onChangeCheckbox} />
                <p className="ml-4 text-left text-lg">
                  {checked === "Empty" && "Todos"}
                  {checked === "Indeterminate" && "Não"}
                  {checked === "Checked" && "Sim"}
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
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium  text-tq1"></th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Nome
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Plano
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Dívida?
              </th>
              <th className="whitespace-nowrap px-8 py-2 text-left font-medium text-tq1">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {clients.map((client) => (
              <tr key={client.id} className="border-b">
                <td className="whitespace-nowrap px-4 py-2">
                  <div
                    className={`h-6 w-6 rounded-full  
                    ${client.debt !== 0 && "bg-red-600"}
                    ${client.lastSeen > 31 && "bg-yellow-500"}
                    ${client.lastSeen > 7 ? "bg-blue-500" : "bg-green-500"}
                    `}
                  />
                </td>

                <td className="whitespace-nowrap px-4 py-2">{client.name}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {client.plan === "plano1" && "Finess Floris"}
                  {client.plan === "plano2" && "Morks Gorlassions"}
                  {client.plan === "plano3" && "Mifas Masters"}
                  {client.plan === "" && "S/ subscrição"}
                </td>
                <td className={`whitespace-break-spaces px-4 py-2`}>
                  <span
                    className={`w-full rounded-full px-4 py-2 text-xs font-medium text-white ${
                      client.debt !== 0 ? "bg-red-600" : "bg-green-500"
                    }`}
                  >
                    {client.debt === 0 && "Não"}
                    {client.debt !== 0 && client.debt + "€"}{" "}
                  </span>
                </td>
                <td className="whitespace-nowrap px-8 py-2">
                  <Link
                    to={`/dashboard/client/${client.id}`}
                    state={{ data: client }}
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className="h-6 w-6 cursor-pointer text-blue-700"
                    />
                  </Link>
                  <Link to={`tel:${client.contacto}`}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="ml-2 h-6 w-6 cursor-pointer text-green-700"
                    />
                  </Link>
                  <Link to={`mailto:${client.email}`}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="ml-2 h-6 w-6 cursor-pointer text-yellow-700"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      setClients(clients.filter((b) => b.id !== client.id));
                    }}
                    className="ml-2 h-6 w-6 cursor-pointer text-red-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="inline-flex w-full items-baseline justify-center">
          <div className="h-2 w-2 rounded-full bg-red-600" />
          <span className="ml-1 text-sm">- Com dívidas</span>
          <div className="ml-8 h-2 w-2 rounded-full bg-yellow-500" />
          <span className="ml-1 text-sm">- Inativo há mais de 1 mês</span>
          <div className="ml-8 h-2 w-2 rounded-full bg-blue-500" />
          <span className="ml-1 text-sm">- Inativo há mais de 2 semanas</span>
          <div className="ml-8 h-2 w-2 rounded-full bg-green-500" />
          <span className="ml-1 text-sm">- Assíduo</span>
        </div>
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
