import NextAuth from "next-auth"
import {createPrismaClient} from "@/puff-smith/prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

const prisma = createPrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [],
})
