import { PrismaClient } from "@prisma/client";

export default async function EventDescriptionPage({ params } : { params: { eventID: string } }) {

    const prisma = new PrismaClient();
    const event = await prisma.event.findUniqueOrThrow({
        where: {
            eventId: +params.eventID,
        }
    })

    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen">

            <h1 className="w-full text-5xl text-center text-neutral-400">{event.title}</h1>

            <div className="h-3/4 w-full flex">
                <div className="w-1/2">
                    <div className="w-full h-3/4 p-8">
                        <div className="w-full h-full border border-white rounded-3xl p-8">Intro to the tutor</div>
                    </div>
                    <div className="h-1/4 flex flex-col items-center justify-around">
                        <div className="text-3xl">{event.eventTime.toDateString()} ON ZOOM</div>
                        <div className="text-3xl">${event.price.toString()} USD</div>
                        <button className="text-5xl text-white antialiased hover:text-gray-200 py-4 px-8 bg-yellow-400 hover:bg-yellow-600 rounded-full">BOOK TICKET NOW</button>
                    </div>
                    
                </div>
                
                <div className="w-1/2 border border-white rounded-3xl mt-8 mr-8">
                    <h2 className="h-[10%] text-5xl p-8 text-center">COURSE OUTLINE AND DESCRIPTION</h2>
                    <div className="h-[90%] text-right p-8">{event.description}</div>
                </div>
            </div>
            
        </div>
    );
}