import { clerkClient } from "@clerk/nextjs/server"
import { Button } from "~/components/ui/button"
import { deleteImage, getImage } from "~/server/queries"

export default async function FullPageImageView(props: { photoId: number }) {
  const idAsNumber = Number(props.photoId)
  if (isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)

  const uploaderInfo = await clerkClient.users.getUser(image.userId)
  return (
    <div className="flex w-full min-w-0 h-full">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt={image.name} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-lg border-b text-center p-2">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded By: {uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created On: {new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form action={async () => {
            "use server"
            await deleteImage(image.id)
          }}>
            <Button variant="destructive">Delete</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
