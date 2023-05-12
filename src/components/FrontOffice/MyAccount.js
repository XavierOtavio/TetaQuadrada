import React from "react";

export default function MyAccount(props) {
  const [choosedPlan, setChoosedPlan] = props.choosedPlan;

  const planPayment = (choosedPlan) => {
    switch (choosedPlan) {
      case "plano1":
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Plano Finess Floris | 05/2023 - 06/2023 | 15€</p>
            <button
              className="rounded-lg border border-red-500 bg-red-500 px-12 py-3 text-white transition hover:bg-white hover:text-red-500"
              onClick={() => setChoosedPlan("")}
            >
              Cancelar
            </button>
          </fieldset>
        );
        break;
      case "plano2":
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Plano Morks Gorlassions | 05/2023 - 06/2023 | 45€</p>
            <button
              className="rounded-lg border border-red-500 bg-red-500 px-12 py-3 text-white transition hover:bg-white hover:text-red-500"
              onClick={() => setChoosedPlan("")}
            >
              Cancelar
            </button>
          </fieldset>
        );
        break;
      case "plano3":
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Plano Mifas Masters | 05/2023 - 05/2024 | 420€</p>
            <button
              className="rounded-lg border border-red-500 bg-red-500 px-12 py-3 text-white transition hover:bg-white hover:text-red-500"
              onClick={() => setChoosedPlan("")}
            >
              Cancelar
            </button>
          </fieldset>
        );
        break;
      default:
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>-- Sem Plano --</p>
            <div className="rounded-lg border border-white bg-white px-14 py-3 text-white ">
              Cancelar
            </div>
          </fieldset>
        );
        break;
    }
  };

  const totalPayment = (choosedPlan) => {
    switch (choosedPlan) {
      case "plano1":
        return 18;
        break;
      case "plano2":
        return 48;
        break;
      case "plano3":
        return 423;
        break;
      default:
        return 3;
        break;
    }
  };

  return (
    <div>
      <div className="mx-64">
        <h1 className="mt-14 text-center text-4xl font-bold">A Minha Conta</h1>
        <hr className="my-2" />
        <div className="my-14 grid grid-cols-4">
          <div className="col-span-1 ">
            <div className="h-full w-full">
              <img
                src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
                alt="profile"
                className="rounded-full object-cover "
              />
            </div>
          </div>
          <div className=" col-span-3 ml-14 flex flex-col justify-center">
            <h1 className="text-2xl font-semibold">@EngXavierOtávio</h1>
            <p className=" mt-2 text-lg text-gray-500">ID: 068</p>
            <p className="  text-lg text-gray-500">
              Email: xavi.ota@xocompanys.com{" "}
            </p>
            <button className="mt-14 rounded-lg border border-blue-500 bg-blue-500 px-10 py-3 text-white transition hover:bg-white hover:text-blue-500">
              Editar Perfil
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Planos e aulas</h1>
          <hr className="my-2" />
          <h1 className="mb-4 mt-8 text-2xl font-semibold">Plano</h1>
          {planPayment(choosedPlan)}

          <hr className="mt-24 w-full border-black" />

          <h1 className="mb-4 mt-14 text-2xl font-semibold">Aulas</h1>
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Zumba | 2023-05-27 10:00-11:00 | 7€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-10 py-3 text-white transition hover:bg-white hover:text-red-500">
              Desmarcar
            </button>
          </fieldset>
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Cycling | 2023-05-24 14:00-15:00 | 5€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-10 py-3 text-white transition hover:bg-white hover:text-red-500">
              Desmarcar
            </button>
          </fieldset>
          <fieldset className="mb-8 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Combate | 2023-05-01 17:00-18:00 | 4€</p>
            <div className=" rounded-lg border border-white bg-white px-14 py-3 transition">
              -----
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
