
const mockUrls = [
  "https://utfs.io/f/694463c4-b75d-404e-9348-06d365bdd795-94e4o2.jpg",
  "https://utfs.io/f/09d6eabe-ef96-4133-a53b-5048f58b5784-etiwh5.jpg",
  "https://utfs.io/f/be9cb9fc-7008-46c9-bb8f-2c0fd205c9d1-2y4nz4.jpg",
  "https://utfs.io/f/78725ce5-ea36-4323-a498-90025b1d1985-ugpyl6.png",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
