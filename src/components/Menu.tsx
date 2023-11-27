
function Menu() {
  return (
    <header className="fixed w-screen bg-fuchsia-950 " >
      <div className="flex justify-between items-center mx-auto container" >
        <h2 className="font-semibold" >
          Nayeli Quenallata Mayta
        </h2>
        <nav>
          <ul className="flex gap-3 p-3 text-2xl" >
            <li>
              <a href="#" className="hover:text-fuchsia-500 transition-all" >
                Home
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-fuchsia-500 transition-all">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#misredes" className="hover:text-fuchsia-500 transition-all">
                Mis Redes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Menu