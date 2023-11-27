import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

function Redes() {
  return (
    <section className="py-10 bg-violet-950" id="misredes" >
      <div className="mx-auto container" >
        <h3
          className="text-center text-4xl font-bold mb-5"
        >Mis Redes Sociales</h3>
        <div className="flex justify-around text-5xl" >
          <div className="flex flex-col items-center justify-center" >
            <span className="" >
              <CiFacebook />
            </span>
            <a
              target="_blank"
              href="https://www.facebook.com/dcimenayeli.maytadelakd?mibextid=ZbWKwL">
              Facebook
            </a>
          </div>
          <div className="flex flex-col items-center justify-center" >
            <span>
              <CiInstagram />
            </span>
            <a
              target="_blank"
              href="https://instagram.com/naye_mayta?igshid=NGVhN2U2NjQ0Yg==">
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center justify-center" >
            <span>
              <FaTiktok />
            </span>
            <a
              target="_blank"
              href="https://www.tiktok.com/@naye_mayta?_t=8hhCHATj7tl&_r=1">
              Tik Tok
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Redes