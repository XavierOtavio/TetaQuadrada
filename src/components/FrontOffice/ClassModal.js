import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ClassModal(props) {
  const [openClassModal, setOpenClassModal] = props.openClassModal;
  const [modalData, setModalData] = props.modalData;
  const [choosedPlan, setChoosedPlan] = props.choosedPlan;

  return (
    <div>
      <div class="fixed z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-tq3/75 p-4 md:inset-0 md:h-full">
        <div class="h-full w-full max-w-4xl shadow-lg md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div class="flex  rounded-t border-b p-4 ">
              <h3 class="text-xl font-semibold text-gray-900">
                Marcar Atividade
              </h3>{" "}
              <button
                type="button"
                class="ml-auto rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                onClick={() => setOpenClassModal(false)}
              >
                <FontAwesomeIcon icon={faX} className="h-6 w-6" />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="space-y-6 p-6">
              <form class="grid grid-cols-6 gap-4">
                <div class="col-span-1 text-lg font-semibold text-gray-900">
                  Atividade
                  <h6 class="text-sm font-semibold text-gray-900">
                    {modalData.nome}
                  </h6>
                </div>

                <div class="col-span-1 text-lg font-semibold text-gray-900">
                  Local
                  <h6 class="text-sm font-semibold text-gray-900">
                    {modalData.local}
                  </h6>
                </div>

                <div class="col-span-1 text-lg font-semibold text-gray-900">
                  Horário
                  <h6 class="text-sm font-semibold text-gray-900">
                    {modalData.horaInicio} - {modalData.horaFim}
                  </h6>
                </div>

                <div class="col-span-1 text-lg font-semibold text-gray-900">
                  Treinador
                  <h6 class="text-sm font-semibold text-gray-900">
                    {modalData.prof}
                  </h6>
                </div>
                <div class="col-span-1 text-lg font-semibold text-gray-900">
                  Lotação
                  <h6
                    class={`text-sm font-semibold  ${
                      modalData.avaliable ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {modalData.lotacao}
                  </h6>
                </div>
                <div class="col-span-6 text-lg font-semibold text-gray-900">
                  Equipamento:
                  <ul className="text-sm">
                    {modalData.equipamento.map((equipamento) => (
                      <li>- {equipamento}</li>
                    ))}
                  </ul>
                </div>
              </form>
            </div>
            <div
              className={`space-y-6 p-6 ${
                modalData.avaliable ? "" : "sr-only"
              }`}
            >
              <div className={`${choosedPlan === "plano3" && "sr-only"}`}>
                <h3 class="col-span-6 mt-6 text-lg font-semibold text-gray-900">
                  Pagamento
                </h3>
                <fieldset class="col-span-6">
                  <legend class="block text-xs font-medium text-gray-700">
                    Detalhes do Cartão
                  </legend>

                  <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label for="CardNumber" class="sr-only">
                        {" "}
                        Número do Cartão{" "}
                      </label>

                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Número do Cartão"
                        class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div class="flex -space-x-px">
                      <div class="flex-1">
                        <label for="CardExpiry" class="sr-only">
                          {" "}
                          Card Expiry{" "}
                        </label>

                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Data de Validade"
                          class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div class="flex-1">
                        <label for="CardCVC" class="sr-only">
                          {" "}
                          Card CVC{" "}
                        </label>

                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* <!-- Modal footer --> */}
              <div class="space-x-2 rounded-b border-t border-gray-200 p-6">
                <Link to="/classes">
                  <button
                    data-modal-hide="defaultModal"
                    type="button"
                    class=" ml-2 rounded border border-tq1 bg-tq1 px-10 py-3 font-medium text-white hover:border-tq2 hover:bg-tq2"
                    onClick={() => setOpenClassModal(false)}
                  >
                    Marcar
                  </button>
                </Link>

                <button
                  onClick={() => setOpenClassModal(false)}
                  type="button"
                  class=" ml-2 rounded border border-gray-300 bg-white px-10 py-3 font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassModal;
