import { PrismaClient } from "@prisma/client";
import sql from "@vercel/postgres";

export default async function Events() {

    // Get events from database
    const prisma = new PrismaClient();
    const events = await prisma.event.findMany();

    return(
        <div className="flex flex-col w-3/5 h-[90%] border-4 rounded-3xl border-white p-4 space-y-2">
            
            {events.map((ev) => (
                <div key={ev.eventId} className="flex w-full bg-yellow-400 justify justify-between rounded-xl px-8 py-4">
                    <div>{ev.title}</div>
                    <div>{ev.eventTime.toDateString()}</div>
                    <div>{ev.price.toDP(2).toString()}$</div>
                </div>
            ))}

        </div>
    );
}