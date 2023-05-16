import { useState, React } from "react";

export default function CoachesFront(props) {
  const [isLogged, setIsLogged] = props.isLogged;

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const openPopup1 = () => {
    setIsOpen1(true);
  };

  const closePopup1 = () => {
    setIsOpen1(false);
  };
  const openPopup2 = () => {
    setIsOpen2(true);
  };

  const closePopup2 = () => {
    setIsOpen2(false);
  };
  const openPopup3 = () => {
    setIsOpen3(true);
  };

  const closePopup3 = () => {
    setIsOpen3(false);
  };
  const openPopup4 = () => {
    setIsOpen4(true);
  };

  const closePopup4 = () => {
    setIsOpen4(false);
  };
  const openPopup5 = () => {
    setIsOpen5(true);
  };

  const closePopup5 = () => {
    setIsOpen5(false);
  };
  const openPopup6 = () => {
    setIsOpen6(true);
  };

  const closePopup6 = () => {
    setIsOpen6(false);
  };

  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Conheça os nossos colaboradores!
          </h2>

          <p class="mt-4 max-w-md text-gray-500">
            Aqui pode ter uma visão geral dos treinadores que trabalham
            connosco. Assim pode ficar a conhecer-nos melhor e escolher a
            especialidade que mais se adequa a si.
          </p>
        </header>

        <div class="mt-8 sm:flex sm:items-center sm:justify-between">
          <div class="block sm:hidden">
            <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span class="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div class="hidden sm:flex sm:gap-4">
            <div class="w-64">
              <select
                id="filter"
                class="block w-full rounded border border-gray-300 p-2 shadow"
              >
                <option value="">Modalidade</option>
                <option value="musculação">Musculação</option>
                <option value="combate">Combate</option>
                <option value="nutrição">Nutrição</option>
                <option value="cardio">Cardio</option>
                <option value="personal trainer">Personal Trainer</option>
                <option value="natação">Natação</option>
              </select>
            </div>
            <div class="w-64">
              <input
                type="text"
                id="filter"
                class="block w-full rounded border border-gray-300 p-2 shadow"
                placeholder="Nome do treinador..."
              />
            </div>
          </div>
        </div>

        <ul class="mt-4 grid gap-4 sm:grid-cols-4 lg:grid-cols-4">
          <li>
            <a href="#" class="group block overflow-hidden">
              <button onClick={openPopup1}>
                <img
                  src="https://acefitnessmediastorage.blob.core.windows.net/acepublicfiles/2a970ee8-4320-4958-a8cb-e372de6c7ee6.jpg"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </button>

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Armando Pinto
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> Musculação </span>
                </p>
              </div>
            </a>
          </li>

          {isOpen1 && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-6x1 mx-auto rounded-md bg-white p-6 shadow-md">
                <h1 className="mb-4 text-2xl font-bold">
                  Detalhes do Treinador
                </h1>
                <div className="mb-4 flex justify-between">
                  <div className="w-3/4">
                    <img
                      src="https://acefitnessmediastorage.blob.core.windows.net/acepublicfiles/2a970ee8-4320-4958-a8cb-e372de6c7ee6.jpg"
                      alt="Foto do Cliente"
                      className="w-full rounded-md shadow-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Nome:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Armando Inacio Costa Pinto
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Modalidade:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Musculação
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Aulas:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Hipertrofia, resistência, musculação
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Formação:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Ciências do desporto
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Horário:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Segunda das 18:00h às 19:00h/ Terça das 18:00h às
                        19:00h/ Quarta das 18:00h às 19:00h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
                  <button
                    onClick={closePopup1}
                    className="mt-4 rounded bg-tq1 px-4 py-2 font-medium text-white shadow"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          )}

          <li>
            <a href="#" class="group block overflow-hidden">
              <button onClick={openPopup2}>
                <img
                  src="https://www.fitsquad.ca/wp-content/uploads/2020/11/Sathish-personal-trainer-profile.jpg"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </button>

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Jorge Couto
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> Combate </span>
                </p>
              </div>
            </a>
          </li>
          {isOpen2 && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-6x1 mx-auto rounded-md bg-white p-6 shadow-md">
                <h1 className="mb-4 text-2xl font-bold">
                  Detalhes do Treinador
                </h1>
                <div className="mb-4 flex justify-between">
                  <div className="w-3/4">
                    <img
                      src="https://www.fitsquad.ca/wp-content/uploads/2020/11/Sathish-personal-trainer-profile.jpg"
                      alt="Foto do Cliente"
                      className="w-full rounded-md shadow-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Nome:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Jorje Andrá Couto
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Modalidade:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Combate
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Aulas:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        kickboxing, Boxe, Muay Thai
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Formação:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Cinturão negro de kickboxing e Muay Thai
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Horário:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Segunda das 18:00h às 19:00h/ Terça das 18:00h às
                        19:00h/ Quarta das 18:00h às 19:00h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
                  <button
                    onClick={closePopup2}
                    className="mt-4 rounded bg-tq1 px-4 py-2 font-medium text-white shadow"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          )}
          <li>
            <a href="#" class="group block overflow-hidden">
              <button onClick={openPopup3}>
                <img
                  src="https://embodyfitness.ae/wp-content/uploads/2022/08/Jess-Trainer-Image-scaled.jpg"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </button>

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Ana Maria
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> </span>

                  <span class="tracking-wider text-gray-900"> Nutrição </span>
                </p>
              </div>
            </a>
          </li>
          {isOpen3 && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-6x1 mx-auto rounded-md bg-white p-6 shadow-md">
                <h1 className="mb-4 text-2xl font-bold">
                  Detalhes do Treinador
                </h1>
                <div className="mb-4 flex justify-between">
                  <div className="w-3/4">
                    <img
                      src="https://embodyfitness.ae/wp-content/uploads/2022/08/Jess-Trainer-Image-scaled.jpg"
                      alt="Foto do Cliente"
                      className="w-full rounded-md shadow-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Nome:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Ana Maria Lima
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Modalidade:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Nutrição
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Aulas:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Nutricionismo
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Formação:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Saude alimentar e nutrição
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Horário:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Segunda das 18:00h às 19:00h/ Terça das 18:00h às
                        19:00h/ Quarta das 18:00h às 19:00h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
                  <button
                    onClick={closePopup3}
                    className="mt-4 rounded bg-tq1 px-4 py-2 font-medium text-white shadow"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          )}

          <li>
            <a href="#" class="group block overflow-hidden">
              <button onClick={openPopup4}>
                <img
                  src="https://www.thehealthjournals.com/wp-content/uploads/2016/03/Sarah.jpg"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </button>

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Cuca Beludo
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> Cardio </span>
                </p>
              </div>
            </a>
          </li>
          {isOpen4 && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-6x1 mx-auto rounded-md bg-white p-6 shadow-md">
                <h1 className="mb-4 text-2xl font-bold">
                  Detalhes do Treinador
                </h1>
                <div className="mb-4 flex justify-between">
                  <div className="w-3/4">
                    <img
                      src="https://www.thehealthjournals.com/wp-content/uploads/2016/03/Sarah.jpg"
                      alt="Foto do Cliente"
                      className="w-full rounded-md shadow-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Nome:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Cuca dos Santos Beludo
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Modalidade:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Cardio
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Aulas:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Cycling, Steping
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Formação:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Ciências do desporto
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Horário:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Segunda das 18:00h às 19:00h/ Terça das 18:00h às
                        19:00h/ Quarta das 18:00h às 19:00h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
                  <button
                    onClick={closePopup4}
                    className="mt-4 rounded bg-tq1 px-4 py-2 font-medium text-white shadow"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          )}

          <li>
            <a href="#" class="group block overflow-hidden">
              <button onClick={openPopup5}>
                <img
                  src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </button>

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Manuel Gomes
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> R </span>

                  <span class="tracking-wider text-gray-900">
                    {" "}
                    Personal Trainer{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>
          {isOpen5 && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="max-w-6x1 mx-auto rounded-md bg-white p-6 shadow-md">
                <h1 className="mb-4 text-2xl font-bold">
                  Detalhes do Treinador
                </h1>
                <div className="mb-4 flex justify-between">
                  <div className="w-3/4">
                    <img
                      src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                      alt="Foto do Cliente"
                      className="w-full rounded-md shadow-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Nome:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Manuel Jorge Gomes
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Modalidade:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Personal Trainer
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Aulas:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Cycling, Steping
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Formação:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Avaliação fisica, Acompanhamento individualizado
                      </p>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 block font-bold text-gray-700">
                        Horário:
                      </label>
                      <p className="w-full rounded-md bg-gray-200 p-2">
                        Segunda das 18:00h às 19:00h/ Terça das 18:00h às
                        19:00h/ Quarta das 18:00h às 19:00h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
                  <button
                    onClick={closePopup5}
                    className="mt-4 rounded bg-tq1 px-4 py-2 font-medium text-white shadow"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          )}

          <li>
            <a href="#" class="group block overflow-hidden">
              <button onClick={openPopup6}>
                <img
                  src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </button>

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  João Sousa
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> Natação </span>
                </p>
              </div>
            </a>
            {isOpen6 && (
              <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                <div className="max-w-6x1 mx-auto rounded-md bg-white p-6 shadow-md">
                  <h1 className="mb-4 text-2xl font-bold">
                    Detalhes do Treinador
                  </h1>
                  <div className="mb-4 flex justify-between">
                    <div className="w-3/4">
                      <img
                        src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252329_420.jpg"
                        alt="Foto do Cliente"
                        className="w-full rounded-md shadow-md"
                      />
                    </div>
                    <div className="w-3/4 pl-4">
                      <div className="mb-2">
                        <label className="mb-2 block font-bold text-gray-700">
                          Nome:
                        </label>
                        <p className="w-full rounded-md bg-gray-200 p-2">
                          João Miguel Sousa
                        </p>
                      </div>
                      <div className="mb-2">
                        <label className="mb-2 block font-bold text-gray-700">
                          Modalidade:
                        </label>
                        <p className="w-full rounded-md bg-gray-200 p-2">
                          Natação
                        </p>
                      </div>
                      <div className="mb-2">
                        <label className="mb-2 block font-bold text-gray-700">
                          Aulas:
                        </label>
                        <p className="w-full rounded-md bg-gray-200 p-2">
                          Natação Livre, Ginastica Hídrica
                        </p>
                      </div>
                      <div className="mb-2">
                        <label className="mb-2 block font-bold text-gray-700">
                          Formação:
                        </label>
                        <p className="w-full rounded-md bg-gray-200 p-2">
                          Campião nacional de natação
                        </p>
                      </div>
                      <div className="mb-2">
                        <label className="mb-2 block font-bold text-gray-700">
                          Horário:
                        </label>
                        <p className="w-full rounded-md bg-gray-200 p-2">
                          Segunda das 18:00h às 19:00h/ Terça das 18:00h às
                          19:00h/ Quarta das 18:00h às 19:00h
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto max-w-6xl rounded-md bg-white p-6 shadow-md">
                    <button
                      onClick={closePopup6}
                      className="mt-4 rounded bg-tq1 px-4 py-2 font-medium text-white shadow"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
