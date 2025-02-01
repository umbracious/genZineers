import { PrismaClient } from "@prisma/client";

export default async function EventDescriptionPage({
  params,
}: {
  params: { eventID: string };
}) {
  const prisma = new PrismaClient();
  const event = await prisma.event.findUniqueOrThrow({
    where: {
      eventId: +params.eventID,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-3 pt-5">
      <h1 className="w-full text-5xl text-center text-neutral-400">
        {event.title}
      </h1>

      <div className="h-5/6 w-full flex gap-5 px-5">
        <div className="w-3/4 border-yellow-500 border-2 rounded-xl p-3">
          <div className="text-4xl w-full flex justify-center">
            Course Description
          </div>
          <div className="flex flex-col h-[95%] gap-4">
            <div className="flex gap-3 px-2 h-[90%] ">
              <div className="flex w-3/4 h-full border-r-white border-r-2">
                Description and intro
              </div>
              <div className="flex w-1/4 h-full">Gallery</div>
            </div>
            <div> {/* DIV FOR STRIPE STUFF */}
                <div className="flex flex-row-reverse ">
              <button className="text-3xl text-white antialiased py-2 px-10 bg-yellow-500 hover:bg-yellow-600 rounded-3xl max-md:hidden">
                BOOK NOW
              </button>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/4 border-yellow-500 border-2 rounded-xl p-3 gap-2">
          <div className="text-4xl w-full flex justify-center">
            Tutor Description
          </div>
          <div>

          Description and intro
          </div>
        </div>
      </div>
    </div>
  );
}
