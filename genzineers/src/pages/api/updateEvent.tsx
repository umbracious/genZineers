import { PrismaClient } from "@prisma/client";

export default async function handler(req:any, res:any) {
    const { eventId, title, eventTime, description, price} = JSON.parse(req.body);
    const prisma = new PrismaClient();
    try {
            const event = await prisma.event.update({
                where: { eventId: eventId },
                data: { title: title, 
                        eventTime: new Date(eventTime),
                        description: description,
                        price: price,
                }
            })
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    res.status(200).send("Success");
}