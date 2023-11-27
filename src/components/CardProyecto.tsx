type Props = {
  title: string,
  description: string,
  url: string,
  urlImg: any
}

function CardProyecto({ description, urlImg, title, url }: Props) {
  return (
    <div className="p-3 max-w-sm mx-auto bg-zinc-800 rounded-md flex flex-col gap-3" >
      <h3 className="text-center text-fuchsia-600 text-2xl font-semibold" >{title}</h3>
      <img
        className="w-full"
        src={urlImg} width={100} alt="" />
      <p className="text-zinc-300" >{description}</p>
      <div>
        <a href={url} target="_blank" className="py-2 px-4 bg-violet-600 rounded-md" >
          Ver Mas
        </a>
      </div>
    </div>
  )
}

export default CardProyecto