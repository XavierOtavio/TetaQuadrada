import React from "react";

function AboutUs() {
  return (
    <div>
      <section class="">
        <div class="mx-auto max-w-screen-2xl px-4 py-24 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <h1 class="mt-2 text-3xl font-extrabold text-tq1 sm:text-4xl">
                Quem somos? O que nos move?
              </h1>
              <p class="mt-8 max-w-xl text-lg">
                Somos uma equipa de profissionais de saúde, com formação em
                áreas distintas, que se uniu para criar um espaço onde o
                bem-estar físico e mental é o foco principal.
              </p>

              <div class="mt-8">
                <div class="text-2xl font-bold text-tq4">+351 969 696 969</div>

                <address class="mt-2 not-italic">
                  Rua das Canastras nº689, Viseu, Portugal 3500-998
                </address>
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div class=" grid grid-cols-1 gap-4 pb-4 text-2xl font-bold sm:grid-cols-2">
                  Contacte-nos
                </div>
                <div>
                  <label class="sr-only" for="name">
                    Nome
                  </label>
                  <input
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Email"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Telemóvel"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      class="peer sr-only"
                      id="option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option1"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-tq4 peer-checked:bg-tq4 peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Geral </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option2"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-tq4 peer-checked:bg-tq4 peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Planos </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option3"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-tq4 peer-checked:bg-tq4 peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Aulas </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">
                    Mensagem
                  </label>

                  <textarea
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Mensagem"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-block w-full rounded-lg border border-tq4 bg-tq4  px-10 py-3 font-medium text-white hover:bg-white hover:text-tq4 sm:w-auto"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
