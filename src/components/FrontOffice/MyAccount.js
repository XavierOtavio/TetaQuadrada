import React from "react";

export default function MyAccount() {
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
          <h1 className="text-3xl font-bold"> Pagamentos</h1>
          <hr className="my-2" />
          <h1 className="mb-4 mt-8 text-2xl font-semibold">Pendente</h1>
          <fieldset className="rounded-xl border p-6">asklask</fieldset>
          <h1 className="mb-4 mt-14 text-2xl font-semibold">Pago</h1>
          <fieldset className="mb-8 flex items-center justify-between rounded-xl border px-6 py-3">
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
