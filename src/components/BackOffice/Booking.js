import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Booking() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "João",
      classType: "Yoga",
      location: "Sala 1",
      day: "2021-10-10",
      schedule: "10:00",
    },
    {
      id: 2,
      name: "Maria",
      classType: "Musculação",
      location: "Ginásio",
      day: "2021-10-10",
      schedule: "10:00",
    },
    {
      id: 3,
      name: "Daniel",
      classType: "Zumba",
      location: "Sala 2",
      day: "2021-10-10",
      schedule: "9:00",
    },
    {
      id: 4,
      name: "Carlos",
      classType: "Yoga",
      location: "Sala 1",
      day: "2021-10-10",
      schedule: "10:00",
    },
    {
      id: 5,
      name: "Marcos",
      classType: "Natação Livre",
      location: "Piscina",
      day: "2021-10-10",
      schedule: "10:00",
    },
  ]);

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
              placeholder="Por id ou nome do cliente"
            />
          </div>
          <div className="flex w-full  items-center justify-center text-sm font-bold">
            Ordenado por data mais recente
          </div>
          <div className="flex h-full w-full items-center justify-end">
            <Link to={`/dashboard/booking/${null}`}>
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
            {bookings.map((booking) => (
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
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      setBookings(bookings.filter((b) => b.id !== booking.id));
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
