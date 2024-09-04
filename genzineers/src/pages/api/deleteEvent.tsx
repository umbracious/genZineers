import { PrismaClient } from "@prisma/client";

export default async function handler(req:any, res:any) {
    const { eventId } = JSON.parse(req.body);
    const prisma = new PrismaClient();
    try {
            const event = await prisma.event.delete({
                where: { eventId: eventId }
            })
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    res.status(200).send("Success");
}