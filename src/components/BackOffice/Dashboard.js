import {
  faDollarSign,
  faEarthEurope,
  faPeopleRoof,
  faCartShopping,
  faCaretSquareUp,
  faCaretSquareDown,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  return (
    <div className="left-1/4">
      <div className="grid h-full w-full grid-cols-12 grid-rows-6 gap-2 p-4 text-left ">
        <div className="col-start-1 col-end-13 row-start-1 row-end-2">
          <div className="flex h-full w-full items-center justify-around gap-4 px-4">
            <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-tq1">
              <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-tq1">
                  <FontAwesomeIcon
                    icon={faEarthEurope}
                    className="h-1/3 w-1/3  text-tq2"
                  />
                </div>
              </div>
              <div className="flex h-full w-2/4 items-center justify-center ">
                <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl px-4 py-4">
                  <p className="text-3xl font-bold text-tq2">63%</p>
                  <p className="text-base font-thin text-tq2">
                    Taxa de ocupação média das aulas
                  </p>
                </div>
              </div>
              <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
                <div className="inline-flex items-center justify-center gap-2">
                  <p className="text-xl font-bold text-tq2">10%</p>
                  <FontAwesomeIcon
                    icon={faCaretSquareUp}
                    className="text-green-500"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-tq1">
              <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-tq1">
                  <FontAwesomeIcon
                    icon={faPeopleRoof}
                    className="h-1/3 w-1/3  text-tq2"
                  />
                </div>
              </div>
              <div className="flex h-full w-2/4 items-center justify-center ">
                <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl px-4 py-4">
                  <p className="text-3xl font-bold text-tq2">315</p>
                  <p className="text-base font-thin text-tq2">
                    Utilizadores ativos
                  </p>
                </div>
              </div>
              <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
                <div className="inline-flex items-center justify-center gap-2">
                  <p className="text-xl font-bold text-tq2">5%</p>
                  <FontAwesomeIcon
                    icon={faCaretSquareUp}
                    className="text-green-500"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex h-5/6 w-1/4 rounded-3xl bg-tq1">
              <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-tq1">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="h-1/3 w-1/3  text-tq2"
                  />
                </div>
              </div>
              <div className="flex h-full w-2/4 items-center justify-center ">
                <div className="flex h-full w-full flex-col items-start justify-around rounded-3xl px-4 py-4">
                  <p className="text-3xl font-bold text-tq2">€14.532</p>
                  <p className="text-base font-thin text-tq2">
                    Faturação prevista este mês
                  </p>
                </div>
              </div>
              <div className="flex h-full w-1/4 items-center justify-center px-4 py-4">
                <div className="inline-flex items-center justify-center gap-2">
                  <p className="text-xl font-bold text-tq2">12%</p>
                  <FontAwesomeIcon
                    icon={faCaretSquareUp}
                    className="text-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-9 row-start-2 row-end-7">
          <div className="flex h-full w-full items-center justify-around  px-4">
            <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-tq1 p-4">
              <div className="inline-flex items-center justify-between">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-3xl font-bold text-white">€3642.67</p>
                  <p className="text-sm font-thin text-stone-100">
                    Pagamentos esta semana
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-green-600">
                  <p className="text-xl font-bold">12.5 %</p>
                  <FontAwesomeIcon icon={faCaretSquareUp} />
                </div>
              </div>
              <div className="h-full w-full rounded-xl bg-slate-500 bg-opacity-10">
                <div className="inline-flex h-full w-full">
                  <div className="flex h-full w-full flex-nowrap items-center justify-around p-4">
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-2/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        02 Abril 1000€
                      </span>
                    </div>
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-4/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        03 Abril 2000€
                      </span>
                    </div>
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-3/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        04 Abril 1500€
                      </span>
                    </div>
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-1/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        05 Abril 500€
                      </span>
                    </div>
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-5/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        06 Abril 2500€
                      </span>
                    </div>
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-3/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        07 Abril 1500€
                      </span>
                    </div>
                    <div className="group relative h-full w-5 rotate-180 rounded-sm bg-tq1 dark:bg-gray-700">
                      <div className="h-2/6 w-full rounded-sm bg-tq2"></div>
                      <span
                        className="absolute right-0 -translate-x-1/4 rotate-180 whitespace-nowrap rounded-md bg-tq1
      p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        08 Abril 1000€
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-thc4 h-0.5 w-full rounded-full" />
              <div className="flex h-1/6 w-full justify-between p-4">
                <div className="inline-flex items-center justify-center">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                  >
                    <option disabled className="bg-tq1 text-white">
                      02 Abril a 08 de abril
                    </option>
                    <option>Ontem</option>
                    <option>Hoje</option>
                    <option selected>Últimos 7 dias</option>
                    <option>Últimos 30 dias</option>
                    <option>Últimos 90 dias</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-13 row-start-2 row-end-7">
          <div className="rounded-3xl bg-tq4">
            <h1 className="pb-4 pl-7 text-2xl font-bold">
              Clientes ativos no ginásio
            </h1>
            <table className="bg-thc4 h-full w-full divide-y-2 divide-gray-200 overflow-y-scroll  rounded-xl text-sm">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    {""}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Nome
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Horário
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Mensalidade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="border-b">
                  <td className="whitespace-nowrap px-4 py-2">
                    <img
                      src="https://www.projetandopessoas.com.br/wp-content/uploads/2013/11/andre-lima.jpg"
                      alt="Foto do Cliente"
                      className="h-16 w-16 rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Duarte Lopes</td>
                  <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                  <div className="w-14 bg-green-600">
                    <td className="whitespace-nowrap px-4 py-2 text-white">
                      45€
                    </td>
                  </div>
                </tr>
                <tr className="border-b">
                  <td className="whitespace-nowrap px-4 py-2">
                    <img
                      src="https://projetandopessoas.com.br/wp-content/uploads/2015/01/unnamed5.jpg"
                      alt="Foto do Cliente"
                      className="h-16 w-16 rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Maria Amelia</td>
                  <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                  <div className="w-14 bg-green-600">
                    <td className="whitespace-nowrap px-4 py-2 text-white">
                      45€
                    </td>
                  </div>
                </tr>
                <tr className="border-b">
                  <td className="whitespace-nowrap px-4 py-2">
                    <img
                      src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg"
                      alt="Foto do Cliente"
                      className="h-16 w-16 rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Bruno Piloto</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    Horário parcial
                  </td>
                  <div className="w-14 bg-green-600">
                    <td className="whitespace-nowrap px-4 py-2 text-white">
                      45€
                    </td>
                  </div>
                </tr>
                <tr className="border-b">
                  <td className="whitespace-nowrap px-4 py-2">
                    <img
                      src="https://media.licdn.com/dms/image/C5603AQHZgMGA6-uW0w/profile-displayphoto-shrink_800_800/0/1613507674417?e=2147483647&v=beta&t=8agfOf6TVGrDg8XDwdtM3VVBsxoEBk2twcNgxuOpOGA"
                      alt="Foto do Cliente"
                      className="h-16 w-16 rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Rita Gomes</td>
                  <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                  <div className="w-14 bg-green-600">
                    <div className="w-14 bg-green-600">
                      <td className="whitespace-nowrap px-4 py-2 text-white">
                        15€
                      </td>
                    </div>
                  </div>
                </tr>
                <tr className="border-b">
                  <td className="whitespace-nowrap px-4 py-2">
                    <img
                      src="https://media.licdn.com/dms/image/C4E03AQFmI29qBxRwlg/profile-displayphoto-shrink_800_800/0/1600729493554?e=2147483647&v=beta&t=BDAXVitTb-FtUh6ugjBVP2fpCBB2FzsxTDKN5GhLGYQ"
                      alt="Foto do Cliente"
                      className="h-16 w-16 rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">Daniel Pires</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    Horário parcial
                  </td>
                  <div className="w-14 bg-green-600">
                    <td className="whitespace-nowrap px-4 py-2 text-white">
                      15€
                    </td>
                  </div>
                </tr>
                <tr className="border-b">
                  <td className="whitespace-nowrap px-4 py-2">
                    <img
                      src="https://images.endeavor.org.br/uploads/2016/09/deli-matsuo-2.jpg"
                      alt="Foto do Cliente"
                      className="h-16 w-16 rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">David Ponces</td>
                  <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                  <div className="w-14 bg-green-600">
                    <td className="whitespace-nowrap px-4 py-2 text-white">
                      45€
                    </td>
                  </div>
                </tr>
                <button className="absolute right-6 rounded bg-tq1 px-4 py-2 font-bold text-white hover:bg-tq1">
                  Ver mais
                </button>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-start-9 col-end-13 row-start-2 row-end-7 w-1/2  pl-10 ">
        <div className="rounded-3xl bg-tq4">
          <h1 className="pb-4 pl-7 text-2xl font-bold">Clientes em dívida</h1>
          <table className="bg-thc4 h-full w-full divide-y-2 divide-gray-200 overflow-y-scroll  rounded-xl text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  {""}
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Nome
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Horário
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Mensalidade
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2">
                  <img
                    src="https://www.projetandopessoas.com.br/wp-content/uploads/2013/11/andre-lima.jpg"
                    alt="Foto do Cliente"
                    className="h-16 w-16 rounded-full"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2">Duarte Lopes</td>
                <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                <div className="w-14 bg-red-700">
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    45€
                  </td>
                </div>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2">
                  <img
                    src="https://projetandopessoas.com.br/wp-content/uploads/2015/01/unnamed5.jpg"
                    alt="Foto do Cliente"
                    className="h-16 w-16 rounded-full"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2">Maria Amelia</td>
                <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                <div className="w-14 bg-red-700">
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    45€
                  </td>
                </div>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2">
                  <img
                    src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg"
                    alt="Foto do Cliente"
                    className="h-16 w-16 rounded-full"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2">Bruno Piloto</td>
                <td className="whitespace-nowrap px-4 py-2">Horário parcial</td>
                <div className="w-14 bg-red-700">
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    15€
                  </td>
                </div>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap px-4 py-2">
                  <img
                    src="https://media.licdn.com/dms/image/C5603AQHZgMGA6-uW0w/profile-displayphoto-shrink_800_800/0/1613507674417?e=2147483647&v=beta&t=8agfOf6TVGrDg8XDwdtM3VVBsxoEBk2twcNgxuOpOGA"
                    alt="Foto do Cliente"
                    className="h-16 w-16 rounded-full"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2">Rita Gomes</td>
                <td className="whitespace-nowrap px-4 py-2">Horário livre</td>
                <div className="w-14 bg-red-700">
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    45€
                  </td>
                </div>
              </tr>

              <button className="absolute left-12 rounded bg-tq1 px-4 py-2 font-bold text-white hover:bg-tq1">
                Ver mais
              </button>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
