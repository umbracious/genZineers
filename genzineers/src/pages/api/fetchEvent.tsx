import { PrismaClient } from "@prisma/client";

export default async function handler(req:any, res:any) {
    let event;
    const { id } = JSON.parse(req.body);
    const prisma = new PrismaClient();
    try {
            event = await prisma.event.findUnique({
                where: {
                    eventId: id
                }
            })
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    res.status(200).send(event);
}