import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"
import GitHub from "@auth/core/providers/github"

const neon = new Pool({connectionString: process.env.POSTGRES_PRISMA_URL })
const adapter = new PrismaNeon(neon)
const prisma = new PrismaClient({adapter})
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
})