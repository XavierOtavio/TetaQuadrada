import React from "react";

export default function MyAccount() {
  return (
    <div>
      <div className="mx-64">
        <h1 className="mt-14 text-center text-4xl font-bold">A Minha Conta</h1>
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-red-500">PROFILE IMAGE</div>
          <div className="col-span-2 bg-green-500">PROFILE INFO</div>
        </div>
        <div>
          <h1 className="text-3xl font-bold"> Pagamentos</h1>
          <hr className="my-2" />
          <h1 className="mb-4 mt-8 text-2xl font-semibold">Pendente</h1>
          <fieldset className="rounded-xl border p-6">asklask</fieldset>
          <h1 className="mb-4 mt-14 text-2xl font-semibold">Pago</h1>
          <fieldset className="flex items-center justify-between rounded-xl border px-6 py-3 ">
            <p>Aula de Grupo - Yoga | 2023-04-24 10:00-11:00 | 7€</p>
            <button className="rounded-lg border border-blue-500 bg-blue-500 px-10 py-3 text-white transition hover:bg-white hover:text-blue-500">
              Ver Fatura
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
