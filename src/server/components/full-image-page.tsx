import { getImage } from "~/server/queries"

export default async function FullPageImageView(props: { photoId: number }) {
  const idAsNumber = Number(props.photoId)
  if (isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)

  return (
    <img src={image.url} alt={image.name} className="w-96" />
  )
}
