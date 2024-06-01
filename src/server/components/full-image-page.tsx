import { getImage } from "~/server/queries"

export default async function FullPageImageView(props: { photoId: number }) {
  const idAsNumber = Number(props.photoId)
  if (isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)

  return (
    <div className="flex w-full min-w-0 h-full">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt={image.name} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl">{image.name}</div>
      </div>
    </div>
  )
}
