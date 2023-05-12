import React from "react";

export default function Payments(props) {
  const [choosedPlan, setChoosedPlan] = props.choosedPlan;

  const planPayment = (choosedPlan) => {
    switch (choosedPlan) {
      case "plano1":
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Plano Finess Floris | 05/2023 - 06/2023 | 15€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-14 py-3 text-white transition hover:bg-white hover:text-red-500">
              Pagar
            </button>
          </fieldset>
        );
        break;
      case "plano2":
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Plano Morks Gorlassions | 05/2023 - 06/2023 | 45€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-14 py-3 text-white transition hover:bg-white hover:text-red-500">
              Pagar
            </button>
          </fieldset>
        );
        break;
      case "plano3":
        return (
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Plano Mifas Masters | 05/2023 - 05/2024 | 420€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-14 py-3 text-white transition hover:bg-white hover:text-red-500">
              Pagar
            </button>
          </fieldset>
        );
        break;
      default:
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
        <h1 className="mt-14 text-center text-4xl font-bold">Pagamentos</h1>

        <div>
          <h1 className="mb-4 mt-16 text-2xl font-semibold">Pendente</h1>
          {planPayment(choosedPlan)}
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Combate | 2023-05-29 10:00-11:00 | 3€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-14 py-3 text-white transition hover:bg-white hover:text-red-500">
              Pagar
            </button>
          </fieldset>
          <hr className="mt-4 w-full  border-black " />
          <fieldset className="mb-2 flex items-center justify-end rounded-xl px-6 py-3">
            <p className="mr-4 text-3xl">Total: {totalPayment(choosedPlan)}€</p>
            <button className="rounded-lg border border-red-500 bg-red-500 px-9 py-3 text-white transition hover:bg-white hover:text-red-500">
              Pagar Tudo
            </button>
          </fieldset>
          <h1 className="mb-4 mt-14 text-2xl font-semibold">Pago</h1>
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Yoga | 2023-04-24 10:00-11:00 | 7€</p>
            <button className="rounded-lg border border-blue-500 bg-blue-500 px-10 py-3 text-white transition hover:bg-white hover:text-blue-500">
              Ver Fatura
            </button>
          </fieldset>
          <fieldset className="mb-2 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Steping | 2023-03-27 14:00-15:00 | 5€</p>
            <button className="rounded-lg border border-blue-500 bg-blue-500 px-10 py-3 text-white transition hover:bg-white hover:text-blue-500">
              Ver Fatura
            </button>
          </fieldset>
          <fieldset className="mb-16 flex items-center justify-between rounded-xl border px-6 py-3">
            <p>Aula de Grupo - Combate | 2023-03-12 17:00-18:00 | 4€</p>
            <button className="rounded-lg border border-blue-500 bg-blue-500 px-10 py-3 text-white transition hover:bg-white hover:text-blue-500">
              Ver Fatura
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
