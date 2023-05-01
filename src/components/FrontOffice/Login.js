import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [isLogged, setIsLogged] = props.isLogged;
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogged(true);
    navigate(-1);
  };

  return (
    <div>
      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            aria-label="Main"
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <Link to="/">
              <button>
                <FontAwesomeIcon
                  icon={faX}
                  className="absolute left-12 top-12 h-8 w-8"
                />
              </button>
            </Link>
            <div class="max-w-xl lg:max-w-3xl">
              <div className="text-left">
                <h1 class="mt-6 text-3xl font-extrabold  text-tq1 sm:text-3xl md:text-4xl">
                  Ready to dive in?
                </h1>
                <h1 class="text-thc3 mt-6 text-xl font-extralight ">
                  Bem-Vindo
                </h1>
              </div>

              <div class="mt-8 grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-left text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="Password"
                    class="block text-left text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-2 sm:flex sm:items-center sm:gap-4">
                  <button
                    class="hover:border-thc1 block border border-tq4 bg-tq4 px-10 py-3 font-medium text-white hover:bg-white hover:text-tq4"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  {/* <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Ainda não tem conta?
                    <Link to="/register">
                      <Link to="/register" class="text-gray-700 underline">
                        Criar Conta
                      </Link>
                    </Link>
                    .
                  </p> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Login;
