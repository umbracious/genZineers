import { PrismaClient } from "@prisma/client";

export default async function EventDescriptionPage({ params } : { params: { eventID: string } }) {

    const prisma = new PrismaClient();
    const event = await prisma.event.findUniqueOrThrow({
        where: {
            eventId: +params.eventID,
        }
    })

    return(
        <div>
            {event.title}
            {event.eventTime.toDateString()}
            {event.price.toString()}
            {event.description}
        </div>
    );
}