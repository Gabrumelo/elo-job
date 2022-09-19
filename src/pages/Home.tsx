import logo from "../assets/logo.png";
import video from "../assets/kalista.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative flex flex-col h-screen">
      <header className="mt-20">
        <nav className="flex justify-center items-center gap-x-4">
          <Link to="elo-boost">
            <button className="text-white font-bold text-xl">Elo Boost</button>
          </Link>
          <button className="text-white font-bold text-xl">MD10</button>
          <img className="max-w-[11rem] mx-6" src={logo} alt="logo" />
          <button className="text-white font-bold text-xl">DUO BOOST</button>
          <button className="text-white font-bold text-xl">COACH</button>
        </nav>
      </header>
      <main className="grow items-center flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center text-8xl text-white font-bold uppercase tracking-tighter">
            <span className="text-3xl text-red-500 font-semibold tracking-tight	">
              Encontre aqui o seu
            </span>
            Próximo Elo
          </h1>
          <button className="mt-[41px] shadow-[0_0_40px_2px_rgba(255,1,1,1)] bg-red-500 rounded-md px-12 py-4 text-black text-base font-bold uppercase tracking-tighter hover:shadow-transparent">
            Comece por aqui
          </button>
        </div>
      </main>
      <footer className="mb-[16vh]">
        <ul>
          <li>
            <a className="flex">
              <FontAwesomeIcon icon={faIndustry} color="#FFF" />

              <p className="flex flex-col text-base text-white">
                <span className="text-base">Instagram</span>
                Reielojob
              </p>
            </a>
          </li>
          <li>
            <button>Whatsapp</button>
          </li>
        </ul>
      </footer>
      <div className="fixed inset-0 z-[-100] min-h-full">
        <video
          className="min-h-full min-w-full object-cover"
          src={video}
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}

export default Home;
