import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="sticky top-0 flex h-[72px] bg-[#151720]">
      <img className="max-w-[4rem] mx-6" src={logo} alt="logo" />
      <nav>
        <ul className="flex gap-x-8 items-center h-full text-white font-bold text-sm">
          <li className="">Inicio</li>
          <li>Elo Boost</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
