import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function handler(req:any, res:any) {
    const { title, eventTime, description, price} = JSON.parse(req.body);
    const prisma = new PrismaClient({ log: ["query"] });
    try {
            const event = await prisma.event.create({
                data:{
                    title: title,
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