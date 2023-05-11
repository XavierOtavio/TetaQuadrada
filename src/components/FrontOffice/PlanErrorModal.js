import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function PlanErrorModal(props) {
  const [openPlanErrorModal, setOpenPlanErrorModal] = props.openPlanErrorModal;

  return (
    <div class="fixed z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-tq3/75 p-4 md:inset-0 md:h-full">
      <div class="h-full w-full max-w-4xl shadow-lg md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative rounded-lg bg-white shadow">
          {/* <!-- Modal header --> */}
          <div class="flex  rounded-t border-b p-4 ">
            <h3 class="text-xl font-semibold text-gray-900">WARNING</h3>{" "}
            <button
              type="button"
              class="ml-auto rounded-lg bg-transparent p-1.5 text-sm text-gray-400  hover:text-gray-900"
              onClick={() => setOpenPlanErrorModal(false)}
            >
              <FontAwesomeIcon icon={faX} className="h-6 w-6" />
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="my-16 text-center">
            JÁ TEM UM PLANO SELECIONADO
            <br /> Para continuar ancele o seu plano atual na página "Perfil / A
            Minha Conta"
          </div>

          {/* <!-- Modal footer --> */}
          <div class="flex justify-center space-x-2 rounded-b  border-gray-200 pt-6">
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="m-3 rounded border border-tq1 bg-tq1 px-16 py-3 font-medium text-white hover:border-tq2 hover:bg-tq2"
              onClick={() => setOpenPlanErrorModal(false)}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
