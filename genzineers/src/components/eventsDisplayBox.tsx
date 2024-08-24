import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Events() {

    // Get events from database
    const prisma = new PrismaClient();
    const events = await prisma.event.findMany();

    return(
        <div className="flex flex-col w-3/5 h-[90%] border-4 rounded-3xl border-white p-4 space-y-2">
            {events.map((ev) => (
                <Link href={`events/${ev.eventId}`} key={ev.eventId}>
                    <div className="w-full grid grid-cols-3 grid-rows-1 w-full bg-yellow-400 justify justify-items-center rounded-xl px-8 py-4">
                    <div className="justify-self-start">{ev.title}</div>
                    <div>{ev.eventTime.toDateString()}</div>
                    <div className="justify-self-end">{ev.price.toDP(2).toString()}$</div>
                    </div>
                </Link> 
            ))}
        </div>
    );
}