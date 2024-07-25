import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function main() {
    const satyam = await prisma.user.upsert({
        where: { email: 'satyamchowdhury@icloud.com'},
        update: {},
        create: {
            email: 'satyamchowdhury@icloud.com',
            name: 'Satyam',
            eventsHosted: {
                create: {
                    title: 'GenZineers Opening Event',
                    eventTime: new Date('2024-08-07T12:00Z'),
                    description: 'The first official GenZineers event',
                    price: 5.00,
                },
            },
        },
    })
    console.log({satyam})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })