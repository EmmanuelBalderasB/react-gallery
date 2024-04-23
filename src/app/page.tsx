//import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/2a2d38ff-cf35-4c86-aa53-47bf3c661b9c-bk5urz.png",
  "https://utfs.io/f/8988888a-e9d5-41f4-a92e-9699fec4dd75-3srvf0.jpg",
  "https://utfs.io/f/ee941c72-ce87-4332-bbd9-a106d100024b-37j51w.png",
  "https://utfs.io/f/77bcb2cb-335d-4111-a9a3-3ae213ea24eb-nwpzh1.jpeg",
  "https://utfs.io/f/26bd04f6-ccf1-456e-b3f0-c4eac0239ed9-l6vo1j.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} className="" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}