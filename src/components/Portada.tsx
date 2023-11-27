import robot from '../img/robo1.png'

function Portada() {
  return (
    <section className="fondo" >
      <div
        className='h-screen mx-auto container flex flex-col items-center justify-center' >
        <div className='py-5' >
          <h1
            className='text-center text-7xl font-semibold text-black '
          >TECNOLOGIA EDUCATIVA</h1>
          <h3 className='text-black font-semibold text-center text-2xl' >
            BIENVENIDO A MI PAGINA WEB
          </h3>
        </div>
        <div className='grid grid-cols-2 items-center' >
          <div className='text-2xl text-black font-semibold' >
            <p>Colociendo y aprendiendo con Nayeli</p>
            <div>
              <h4>Mi nombre es: Nayeli Quenallata Mayta</h4>
              <h4>Tengo 19 años</h4>
              <p>Estudio en la carrera de educacion parvularia</p>
              <small >Año 2023</small>
            </div>
          </div>
          <div className='flex items-center justify-center' >
            <img src={robot} alt="Robot" width={300} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portada