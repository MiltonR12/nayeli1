import CardProyecto from "./CardProyecto"
import proyecto1 from '../img/proyecto1.jpeg'
import proyecto2 from '../img/proyecto2.jpeg'
import proyecto3 from '../img/proyecto3.jpeg'
import proyecto4 from '../img/proyecto4.jpeg'
import proyecto5 from '../img/proyecto5.jpeg'
import proyecto6 from '../img/proyecto6.jpeg'
import CardPdf from "./CardPdf"
import pdf2 from '../pdf/pdf1.pdf'
import pdf3 from '../pdf/pdf2.pdf'
import pdf1 from '../pdf/pdf0.pdf'

function SectionProyectos() {
  return (
    <section className="py-5 bg-pink-200" id="proyectos" >
      <div className="container mx-auto" >
        <h3 className="text-fuchsia-600 font-semibold text-5xl text-center mb-5" >
          Proyectos Realizados
          </h3>
        <div className="grid grid-cols-2 gap-5" >

          <CardProyecto
            title="Los 5 sentidos"
            description="Explora el fascinante mundo de los 5 sentidos con nuestro diagrama interactivo. Descubre cómo trabajan juntos para brindarte una experiencia sensorial única."
            url="https://coggle.it/diagram/ZOKqMVpO0W4546b5/t/los-5-sentidos-https-youtube-com-watch-v-qbvnb2x5ro4/84b04d94e6882f5518a7c562f7b47105f3442400648fa6dbecf3a232b24ee8ce?classId=b66ac062-0b55-4dd5-89f9-206e13afbfe0&assignmentId=ed3c389f-642d-4d23-a7ab-9d1ec256e07e&submissionId=e0e01bd4-89b0-e8ab-bd36-3b48846b24e2"
            urlImg={proyecto1}
          />

          <CardProyecto
            title="LAS TICS"
            description="Sumérgete en el universo de las TIC con nuestro mapa mental interactivo. Visualiza de manera clara y concisa las interconexiones y posibilidades que ofrece la tecnología de la información y la comunicación. ¡Explora las ramas y descubre cómo las TIC transforman nuestro mundo digital!"
            url="https://coggle.it/diagram/ZOLhCVpO0W45BN0q/t/las-tics/5a553d1625d7cb40ba8327bd0ea2074cd95996bdc103561a8154b3c5a91001a5?classId=b66ac062-0b55-4dd5-89f9-206e13afbfe0&assignmentId=2b0054d9-d8e9-4a51-9a9b-c7297a2e965e&submissionId=9e0f60ad-23a7-1e6d-b5b5-92deaa76a2d3"
            urlImg={proyecto2}
          />

          <CardProyecto
            title="Los 5 sentidos usando las tecnologias"
            description="Explora los 5 sentidos potenciados por tecnología. Desde realidad virtual hasta sonidos envolventes, descubre cómo la innovación transforma tu experiencia sensorial."
            url="https://www.canva.com/design/DAFsxxha-Bo/C5XZoWVf2iuW_tDcIKMLPA/view?utm_content=DAFsxxha-Bo&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            urlImg={proyecto3}
          />

          <CardProyecto
            title="Fichas interactivas de las frutas"
            description="Sumérgete en el mundo de las frutas con nuestras fichas interactivas. Explora texturas, colores y sabores a través de una experiencia única. ¡Descubre datos interesantes, beneficios para la salud y recetas deliciosas con solo un clic!"
            url="https://www.goconqr.com/es-ES/flashcard/38941080/sin-titulo"
            urlImg={proyecto4}
          />

          <CardProyecto
            title="Recursos naturales y artificiales"
            description="Explora la dualidad de recursos naturales y artificiales con nuestras fichas interactivas. Descubre cómo coexisten y afectan nuestro entorno. ¡Sumérgete en la riqueza de la naturaleza y la innovación humana de manera visual y educativa!"
            url="https://docs.google.com/presentation/d/1DjybnrcGWbNYfyrXXvMqqxN0_ZbBt3_CjM9t9ZWQXwE/mobilepresent?slide=id.p"
            urlImg={proyecto5}
          />

          <CardProyecto
            title="Peligro del internet"
            description="Desentraña el mundo virtual con nuestras fichas interactivas sobre el peligro del internet. Explora consejos de seguridad, riesgos potenciales y cómo protegerte en línea. ¡Navega con conciencia y seguridad en la era digital!"
            url="https://www.canva.com/design/DAFvTmVndsU/QTbnQwGzXEoeTdRH9QtEdw/view"
            urlImg={proyecto6}
          />

          <div className="col-span-2 pt-5 mx-auto" >
            <h2 className="font-bold py-2" >
              VIDEO DINAMICO Y CREATIVO PARA NIÑOS
            </h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Tu5FYEiDBKE?si=fw8xCAAfhhULutuP" title="YouTube video player" frameborder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div className="col-span-2 flex flex-col gap-3" >
            <h3 className="text-rose-600 text-3xl" >Recursos</h3>
            
            <CardPdf 
              title="Cuaderno Digital 1"
              url={pdf1}
            />

            <CardPdf
              title="Cuaderno Digital 2"
              url={pdf2}
            />

            <CardPdf
              title="Manual para los padres sobre el uso de los TICs"
              url={pdf3}
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default SectionProyectos