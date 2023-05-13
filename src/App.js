import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="relative">
      <ul class="flex space-x-6">
        <li className="flex flex-col items-center space-y-1 mt-14">
          <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              class="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                class="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/200"
                alt="cute kitty"
              />
            </a>
            <button class="create-story">+</button>
          </div>
          <a href="#">you</a>
        </li>
        <li className="flex flex-col items-center space-y-1 mt-14">
          <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              class="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                class="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/202"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">rambo</a>
        </li>
        <li className="flex flex-col items-center space-y-1 mt-14">
          <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              class="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                class="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/215"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">sumo</a>
        </li>
        <li className="flex flex-col items-center space-y-1 mt-14">
          <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              class="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                class="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/210"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">smough</a>
        </li>
      </ul>
      <div class="absolute inset-x-0 top-0 flex justify-between items-center px-4 py-2 bg-white">
        <h1 class="text-gray-900 font-semibold text-xl">Instagram</h1>
        <button class>
          <svg
            class="h-7 w-7"
            fill="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
