import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Modalities() {
  const [modalities, setModalities] = useState([
    {
      id: 1,
      classType: "Yoga",
      classDescription:
        "O yoga é um conjunto de disciplinas físicas, mentais e espirituais originárias da Índia. A palavra está associada com as práticas meditativas tanto do budismo quanto do hinduísmo.",
      locationType: "Sala",
    },
    {
      id: 2,
      classType: "Musculação",
      classDescription:
        "O treinamento de força, conhecido popularmente como musculação, é uma forma de exercício contra resistência, praticado normalmente em academias, para o treinamento e desenvolvimento dos músculos esqueléticos.",
      locationType: "Ginásio",
    },
    {
      id: 3,
      classType: "Zumba",
      classDescription:
        "O zumba mistura movimentos de danças latinas como o samba, salsa, merengue, mambo e reggaeton, ou mesmo outros estilos como hip hop e dança do ventre com exercícios próprios do treino cardiovascular e, por este motivo, é muito utilizado em academias, promovendo o condicionamento físico de um modo geral.",
      locationType: "Sala",
    },
    {
      id: 5,
      classType: "Natação Livre",
      classDescription:
        "A natação é a capacidade do homem e de outros seres vivos de se deslocarem através de movimentos efetuados no meio líquido, geralmente sem ajuda artificial. A natação é uma das atividades físicas mais completas, pois trabalha todos os músculos do corpo.",
      locationType: "Piscina",
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
              placeholder="Por id ou nome da modalidade"
            />
          </div>
          <div className="flex w-full  items-center justify-center text-sm font-bold">
            Ordenado por nome
          </div>
          <div className="flex h-full w-full items-center justify-end">
            <Link to={`/dashboard/modalities/${null}`}>
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
                Modalidade
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-tq1">
                Espaço
              </th>
              <th className="whitespace-nowrap px-8 py-2 text-left font-medium text-tq1">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            {modalities.map((modality) => (
              <tr key={modality.id} className="border-b">
                <td className="whitespace-nowrap px-4 py-2">{modality.id}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {modality.classType}
                </td>
                <td className="whitespace-break-spaces px-4 py-2">
                  {modality.locationType}
                </td>
                <td className="whitespace-nowrap px-8 py-2">
                  <Link
                    to={`/dashboard/modalities/${modality.id}`}
                    state={{ data: modality }}
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className="h-6 w-6 cursor-pointer text-blue-700"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      setModalities(
                        modalities.filter((b) => b.id !== modality.id)
                      );
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
