import React from "react";

export default function AddCoach() {
  return (
    <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Adicionar do Treinador</h1>
      <div className="mb-4 flex justify-between">
        <div className="w-1/4">
          <img
            src="https://cdn.icon-icons.com/icons2/510/PNG/512/person-add_icon-icons.com_50077.png"
            alt="Foto do Cliente"
            className="w-full rounded-md shadow-md"
          />
        </div>
        <div className="w-3/4 pl-4">
          <div className="mb-2">
            <label
              htmlFor="nome-completo"
              className="mb-2 block font-bold text-gray-700"
            >
              Nome Completo:
            </label>
            <input
              type="text"
              id="nome-completo"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="telefone"
              className="mb-2 block font-bold text-gray-700"
            >
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="morada"
              className="mb-2 block font-bold text-gray-700"
            >
              Morada:
            </label>
            <input
              type="text"
              id="morada"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nif" className="mb-2 block font-bold text-gray-700">
              NIF:
            </label>
            <input
              type="text"
              id="nif"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nif" className="mb-2 block font-bold text-gray-700">
              Horário de Aulas:
            </label>
            <input
              type="text"
              id="nif"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nif" className="mb-2 block font-bold text-gray-700">
              Formação:
            </label>
            <input
              type="text"
              id="nif"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nif" className="mb-2 block font-bold text-gray-700">
              Termino de contrato:
            </label>
            <input
              type="text"
              id="nif"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nif" className="mb-2 block font-bold text-gray-700">
              Salário:
            </label>
            <input
              type="text"
              id="nif"
              className="w-full rounded-md bg-gray-200 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
