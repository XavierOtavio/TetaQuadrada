import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserGroup,
  faMagnifyingGlass,
  faWifi,
  faSquareParking,
  faUtensils,
  faPersonSwimming,
  faDumbbell,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <section class="relative bg-[url(https://www.noticiasmagazine.pt/files/2021/11/strong-man-training-in-gym-1200x675.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-tq1/95 sm:to-black/50"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
              No pain, no gain
              <strong class="block font-extrabold text-tq4">
                Gim bros, let's go!
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-tq2">
              Entra em forma e sente-te bem, com os nossos treinadores
              experientes e instalações de topo.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#cozinhas"
                class="block w-full scroll-smooth rounded bg-tq4 px-12 py-3 text-sm font-medium text-white shadow transition hover:bg-tq2 focus:outline-none focus:ring active:bg-tq2 sm:w-auto"
              >
                Vamos começar
              </a>

              <a
                href="#catalogo"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-tq1 shadow hover:text-tq2 focus:outline-none focus:ring active:text-tq2 sm:w-auto"
              >
                Saber Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="cozinhas">
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-5xl text-center">
              <h1 class="mt-2 text-3xl font-extrabold text-tq1 sm:text-4xl">
                Estás pronto para ficares em forma e sentires-te bem?
              </h1>
              <h2 class="mt-4 text-lg  tracking-wide text-gray-500 text-justify">
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
      <section className="bg-tq1">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Cozinhas
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Encontre uma grande variadade de designs e materiais para ir
                    de encontro às suas espectativas
                  </p>
                </header>
                {/* <Link
                  to="productsList"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  <h1>Veja aqi!</h1>
                </Link> */}
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  {/* <Link to="#" class="group block"> */}
                  <img
                    src="https://www.bodybuilding.com/images/2021/march/what-is-the-best-5-day-workout-split-header-960x540.jpg"
                    alt=""
                    class="aspect-square w-full rounded object-cover"
                  />

                  <div class="mt-3">
                    <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Cozinha Deluxe
                    </h3>
                  </div>
                  {/* </Link> */}
                </li>

                <li>
                  {/* <Link to="#" class="group block">
                    <img
                      src="https://www.eshoper.in/wp-content/uploads/2021/12/best-kitchen-furniture-latest-design-low-price-furnitures-store-panvel-kamothe-navi-mumbai.jpg"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Cerâmica
                      </h3>
                    </div>
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class=" flex justify-center">
        <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="max-w-xl text-left">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Descubra os nossos serviços
            </h2>

            <p class="mt-4 font-thin text-gray-500">
              O nosso hotel oferece uma grande variedade de serviços para que se
              sinta em casa. Desde o pequeno-almoço até ao serviço de quartos,
              passando pelo bar e restaurante, temos tudo o que precisa para uma
              estadia perfeita. Testado e aprovado pelo Selo de Qualidade
              Turística do senhor doutor Marcelo Rebelo de Sousa.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 text-left md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
              <FontAwesomeIcon icon={faWifi} className="h-8 w-8 text-thc1" />

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
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Estacionamento</h2>

                <p class="mt-1 text-sm text-gray-500">
                  O estacionamento é gratuito para todos os hóspedes do hotel.
                  Dispõe de 500 lugares de estacionamento subterrâneo, com
                  vigilancia 24 horas por dia, 7 dias por semana e 365 dias por
                  ano e acesso directo ao hotel. Acessível apenas a carros,
                  motas, bicicletas, autocarros, autocaravanas e camiões.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Restauração</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Dispomos de 3 restaurantes, especialistas em gastronomia de
                  todo o mundo, com uma grande variedade de pratos e bebidas.
                  Inlcui ainda um bar de cocktails e um bar de snacks.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faPersonSwimming}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Piscinas</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Piscinas exteriores e interiores. Horário de funcionamento:
                  9h00 - 22h00. A piscina exterior está aberta de Abril a
                  Outubro. Piscinas certificas pela Deco com 5 estrelas pois
                  cumprem com todos os requisitos de segurança e não apresentam
                  riscos para a saúde dos utilizadores tais como a presença de
                  bactérias, fungos, algas, e urina.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Ginásio</h2>

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
              <FontAwesomeIcon
                icon={faBellConcierge}
                className="h-8 w-8 text-thc1"
              />

              <div>
                <h2 class="text-lg font-bold">Serviço de quartos</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Serviço de quartos extremamente rápido, eficiente e caro.
                  Ideal para quem quer impressionar a sua cara-metade com uma
                  garrafa de champanhe e morangos frescos no quarto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="grid grid-cols-2 mb-32">
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
    </div>
  );
}

export default Home;
