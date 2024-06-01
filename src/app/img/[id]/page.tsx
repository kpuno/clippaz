import { getImage } from "~/server/queries"
import FullPageImageView from "~/server/components/full-image-page"

export default async function PhotoPage({
  params: { id: photoId }
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(photoId)
  if (isNaN(idAsNumber)) throw new Error("Invalid photo id")

  return (
    <FullPageImageView photoId={idAsNumber} />
  )
}
