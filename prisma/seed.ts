import {createPrismaClient} from "@/puff-smith/prisma";

const prisma = createPrismaClient();

export async function main() {
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
