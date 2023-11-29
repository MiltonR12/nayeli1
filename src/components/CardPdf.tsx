type Props = {
  title: string,
  url: string
}

function CardPdf({ title, url }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-zinc-800 py-2 px-4 justify-between " >
      <h3>{title}</h3>
      <a href={url} download={true} >Descargar</a>
    </div>
  )
}

export default CardPdf