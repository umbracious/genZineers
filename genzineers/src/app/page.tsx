export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-fixed bg-[url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg')] bg-origin-border bg-top">
        <div>
          <button className="text-5xl text-white hover:text-gray-200 px-12 py-8 outline outline-white hover:outline-gray-200 outline-8 rounded-full">VIEW EVENTS</button>
        </div>
      </div>

      <div className="w-screen py-8 flex flex-col items-center justify-around space-y-8 bg-white">
        <div className="flex items-center flex-col">
          <h1 className="text-xl">OUR MISSION</h1>
          <p className="pt-8 text-md w-2/3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero magnam cum inventore provident facilis at aut alias id totam! Maiores dolores cumque at totam neque magni, optio exercitationem officia, nobis doloribus qui tempore consectetur perferendis ullam corrupti eaque! Labore eius incidunt hic, numquam ullam illo asperiores itaque! Dolorum sit temporibus nam magnam rerum qui velit impedit perferendis similique nulla!</p>
        </div>

        <div className="outline outline-4 outline-gray-200 hover:outline-gray-400 hover:shadow-2xl px-8 py-8 rounded-xl">
          <h1 className="text-xl mb-8">FOLLOW FOR MORE EDUCATIONAL CONTENT</h1>
          <div className="flex items-center justify-center">
            https://beacons.ai/thepotentialdropout
          </div>
          
        </div>
      </div>
    </main>
  );
}
