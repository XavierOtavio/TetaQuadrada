import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSquareParking,
  faDumbbell,
  faPersonBiking,
  faWeightHanging,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PlanErrorModal from "./PlanErrorModal";
import { useState } from "react";

function Home(props) {
  const [isLogged, setIsLogged] = props.isLogged;
  const [choosedPlan, setChoosedPlan] = props.choosedPlan;
  const [openPlanErrorModal, setOpenPlanErrorModal] = useState(false);
  const navigate = useNavigate();

  const handlePlanClick = (plan) => {
    if (isLogged) {
      if (choosedPlan !== "") {
        setOpenPlanErrorModal(true);
      } else {
        switch (plan) {
          case 1:
            setChoosedPlan("plano1");
            break;
          case 2:
            setChoosedPlan("plano2");
            break;
          case 3:
            setChoosedPlan("plano3");
            break;
          default:
            break;
        }
      }
      navigate("/myaccount");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <section class="relative bg-[url(https://www.noticiasmagazine.pt/files/2021/11/strong-man-training-in-gym-1200x675.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-tq1/95 sm:to-black/50"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
              No pain, no gain
              <strong class="block font-extrabold text-tq4">
                Gim bros, let&apos;s go!
              </strong>
            </h1>

            <p class="mt-4 max-w-lg text-tq2 sm:text-xl sm:leading-relaxed">
              Entra em forma e sente-te bem, com os nossos treinadores
              experientes e instalações de topo.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#plans"
                class="block w-full scroll-smooth rounded bg-tq4 px-12 py-3 text-sm font-medium text-white shadow transition hover:bg-tq2 focus:outline-none focus:ring active:bg-tq2 sm:w-auto"
              >
                Ver Planos
              </a>

              <Link
                to="/classes"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-tq1 shadow hover:text-tq2 focus:outline-none focus:ring active:text-tq2 sm:w-auto"
              >
                Aulas de Grupo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-5xl text-center">
              <h1 class="mt-2 text-3xl font-extrabold text-tq1 sm:text-4xl">
                Estás pronto para ficares em forma e sentires-te bem?
              </h1>
              <h2 class="mt-4 text-justify  text-lg tracking-wide text-gray-500">
                O nosso ginásio oferece uma variedade de aulas e opções de
                treino para ajudá-lo a atingir os seus objetivos de fitness.
                Seja para melhorar a sua condição física, construir força ou
                emagrecer, temos algo para todos. Junte-se agora e comece a sua
                jornada para uma vida mais saudável! O nossos treinadores
                experientes estão aqui para guiá-lo em cada passo do caminho, e
                as nossas instalações de ponta são projetadas para ajudá-lo a
                obter o máximo do seu treino. Não espere mais, dê o primeiro
                passo para uma vida mais saudável e feliz hoje. Ainda não está
                convencido? Confira nossa página de aulas para ver todas as
                opções que oferecemos, ou saiba mais sobre os nossos treinadores
                e as suas qualificações. E com as nossas opções de preços
                competitivos, nunca foi tão bom juntar-se a nós. Então, o que
                você está à espera? Inscreva-se hoje e vamos começar a sua
                jornada de fitness!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 flex h-auto w-full justify-center">
        <img
          src="https://www.bodybuilding.com/images/2021/march/what-is-the-best-5-day-workout-split-header-960x540.jpg"
          alt="gym"
          className="object-cover object-center"
        />
      </div>
      <h1
        class="mb-3 mt-2 text-center text-3xl font-extrabold text-tq1 sm:text-4xl"
        id="plans"
      >
        Descobre os nossos planos
      </h1>
      <section className="bg-tq1">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="lg:col-span-3 lg:py-8">
              <ul class="grid grid-cols-3 gap-8">
                <li>
                  <div class="group relative block overflow-hidden">
                    <div class="relative block border border-gray-100 bg-white p-6">
                      <span class="whitespace-nowrap bg-tq4 px-3 py-1.5 text-xs font-medium text-white">
                        New
                      </span>
                      <h3 class="mt-5 text-center text-4xl font-medium text-gray-900">
                        Finess Floris
                      </h3>
                      <h3 class="mt-2 text-center text-xl font-medium text-gray-900">
                        Tempo Parcial
                      </h3>

                      <h1 class="my-12 text-center text-7xl font-light text-gray-900">
                        15€<span class="text-3xl">/mês</span>
                      </h1>

                      <hr className="my-2 text-gray-500" />

                      <p class="mt-5 pl-3 text-sm text-gray-700">
                        <p class=" text-gray-700"> SEGUNDA - SEXTA</p>
                        <p class=" text-gray-700"> 09:00 - 11:30</p>
                        <p class=" text-gray-700">14:00 - 17:00</p>
                        <p class="mt-3 text-gray-700">- ACESSO AO GINÁSIO</p>
                      </p>

                      <button
                        class="mb-4 mt-24 block w-full rounded border bg-tq4 p-4 text-sm font-medium text-white transition hover:border hover:border-tq4 hover:bg-white hover:text-tq4"
                        onClick={() => handlePlanClick(1)}
                      >
                        Selecionar
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="relative block border border-gray-100 bg-white p-6">
                    <span class="whitespace-nowrap px-3 py-1.5 text-xs font-medium text-white">
                      New
                    </span>
                    <h3 class="mt-4 text-center text-4xl font-medium text-gray-900">
                      Morks Gorlassions
                    </h3>
                    <h3 class="mt-2 text-center text-xl font-medium text-gray-900">
                      Horário Livre
                    </h3>

                    <h1 class="my-12 text-center text-7xl font-light text-gray-900">
                      45€<span class="text-3xl">/mês</span>
                    </h1>

                    <hr className="my-2 text-gray-500" />

                    <p class="mt-4 pl-3 text-sm text-gray-700">
                      <p class=" text-gray-700"> SEGUNDA - SÁBADO</p>
                      <p class=" text-gray-700"> 07:00 - 21:30</p>
                      <p class="mt-3 text-gray-700">- ACESSO AO GINÁSIO</p>

                      <p class=" mt-3 text-gray-700"> - TOALHAS GRATUITAS</p>
                      <p class=" text-gray-700"> - CACIFOS</p>
                      <p class=" text-gray-700">- AVALIAÇÃO NUTRICIONAL</p>
                    </p>

                    <button
                      class="mb-3 mt-14 block w-full rounded border bg-tq4 p-4 text-sm font-medium text-white transition hover:border hover:border-tq4 hover:bg-white hover:text-tq4"
                      onClick={() => handlePlanClick(2)}
                    >
                      Selecionar
                    </button>
                  </div>
                </li>

                <li>
                  <div class="relative block border border-gray-100 bg-white p-6">
                    <span class="whitespace-nowrap px-3 py-1.5 text-xs font-medium text-white">
                      New
                    </span>
                    <h3 class="mt-4 text-center text-4xl font-medium text-gray-900">
                      Mifas Masters
                    </h3>
                    <h3 class="mt-2 text-center text-xl font-medium text-gray-900">
                      Horário Livre
                    </h3>

                    <h1 class="my-12 text-center text-7xl font-light text-gray-900">
                      35€<span class="text-3xl">/mês*</span>
                    </h1>

                    <hr className="my-2 text-gray-500" />

                    <p class="mt-4 pl-3 text-sm text-gray-700">
                      <p class=" text-gray-700"> SEGUNDA - SÁBADO</p>
                      <p class=" text-gray-700"> 07:00 - 21:30</p>
                      <p class="mt-3 text-gray-700">- ACESSO AO GINÁSIO</p>
                      <p class="text-gray-700">
                        - AULAS DE GRUPO INCLUÍDAS (requer marcação)
                      </p>
                      <p class=" mt-3 text-gray-700"> - TOALHAS GRATUITAS</p>
                      <p class=" text-gray-700"> - CACIFOS</p>
                      <p class=" text-gray-700">- AVALIAÇÃO NUTRICIONAL</p>
                    </p>

                    <button
                      class="mt-9 block w-full rounded border bg-tq4 p-4 text-sm font-medium text-white transition hover:border hover:border-tq4 hover:bg-white hover:text-tq4"
                      onClick={() => handlePlanClick(3)}
                    >
                      Selecionar
                    </button>
                    <p class="-mb-3 mt-2 text-xs text-gray-400 ">
                      *pagamento anual de 420€
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class=" flex justify-center" id="find">
        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="max-w-xl text-left">
            <h2 class="text-3xl font-bold sm:text-4xl ">Os nossos serviços</h2>

            <p class="mt-4 font-thin text-gray-500">
              O nosso ginásio oferece uma grande variedade de serviços para que
              o seu treino seja o mais completo possível. Desde aulas de grupo,
              a treinos personalizados, temos tudo o que precisa para atingir os
              seus objetivos.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 text-left md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
              <FontAwesomeIcon icon={faWifi} className="text-thc1 h-8 w-8" />

              <div>
                <h2 class="text-lg font-bold">Wi-Fi</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Gratuito em todo o hotel. Dispomos de uma rede de Wi-Fi de
                  alta velocidade (10Gbps) em todo o hotel, para que possa
                  navegar sem preocupações. Avaliado pela Deco com 5 estrelas.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faSquareParking}
                className="text-thc1 h-8 w-8"
              />

              <div>
                <h2 class="text-lg font-bold">Estacionamento</h2>

                <p class="mt-1 text-sm text-gray-500">
                  O estacionamento é gratuito apenas para clientes. Dispõe de
                  500 lugares de estacionamento subterrâneo, com vigilancia 24
                  horas por dia, 7 dias por semana e 365 dias por ano e acesso
                  directo ao ginásio. Acessível apenas a carros, motas,
                  bicicletas, autocarros, autocaravanas e camiões.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faPersonBiking}
                className="text-thc1 h-8 w-8"
              />

              <div>
                <h2 class="text-lg font-bold">General Fitness</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Se os teus objetivos são melhorar a tua saúde e bem-estar,
                  temos tudo o que precisas. Temos equipamento de cardio em dois
                  pisos, incluindo 8 stepmills, 15+ passadeiras, máquinas de
                  remo, bicicletas de exercício, bicicletas de spinning,
                  elípticas, treinadores de arco e até uma escada de Jacob. Além
                  do equipamento de cardio, temos áreas de alongamento com
                  tapetes, rolos de espuma, bandas, pesos leves e muito mais.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faWeightHanging}
                className="text-thc1 h-8 w-8"
              />

              <div>
                <h2 class="text-lg font-bold">Weight Training</h2>

                <p class="mt-1 text-sm text-gray-500">
                  De bodybuilding a powerlifting e tudo o que está no meio, o
                  nosso ginásio tem o equipamento para ajudá-lo a atingir seus
                  objetivos. Com dumbells até 150lbs, 7 racks de agachamento, 5
                  plataformas de levantamento de peso morto, 2 bancos de
                  competição e uma variedade de máquinas carregadas com placas e
                  pinos, temos tudo o que você precisa.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="text-thc1 h-8 w-8"
              />

              <div>
                <h2 class="text-lg font-bold">Functional Training</h2>

                <p class="mt-1 text-sm text-gray-500">
                  O ginásio está aberto 24 horas por dia, 7 dias por semana e
                  365 dias por ano. Equipado com aparelhos de última geração e
                  com personal trainers disponíveis para ajudar os hóspedes a
                  atingir os seus objectivos ou simplemente para se conhecerem
                  melhor.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon icon={faLink} className="text-thc1 h-8 w-8" />

              <div>
                <h2 class="text-lg font-bold">Team Training</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Com 60m de relva, caixas pliométricas empilháveis, bolas de
                  medicina ponderadas, cordas de batalha, racks de agachamento e
                  plataformas de levantamento de peso morto, a nossa sala de
                  treino funcional tem todo o equipamento que você precisa para
                  levar o seu treino para o próximo nível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="mb-32 grid grid-cols-2">
        <img
          alt="Les Paul"
          src="https://cdn.shopify.com/s/files/1/0141/5242/t/16/assets/fitsix-4-bright_LIQo.jpg?v=1620121722618"
          class="aspect-video w-full object-cover"
        />

        <div class="grid grid-cols-2 ">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            class="aspect-video w-full  object-cover"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="aspect-video w-full object-cover"
          />

          <img
            alt="Les Paul"
            src="https://www.blogjab.com/wp-content/uploads/2022/11/gallery_image_group-workout_42A6.jpg"
            class="aspect-video w-full object-cover"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="aspect-video w-full object-cover"
          />
        </div>
      </div>
      <div className="fixed">
        <PlanErrorModal />
      </div>
    </div>
  );
}

export default Home;
