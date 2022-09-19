import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/logo.png";
import video from "../assets/kalista.mp4";

function SuportHome() {
  return (
    <>
      <Header />
      <div className="flex">
        {/* <figure className="fixed min-h-full">
          <img
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-w-[11rem] mx-6"
            src={logo}
            alt="logo"
          />
          <video
            className="
          absolute
          top-2/4
          left-[10%]
          min-h-full
          object-contain
          "
            src={video}
            autoPlay
            muted
            loop
          />
        </figure> */}
        <Outlet />
      </div>
    </>
  );
}

export default SuportHome;
