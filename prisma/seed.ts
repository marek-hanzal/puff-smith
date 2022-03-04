import prismaClient from "@/puff-smith/service/prisma";

const main = async () => {
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prismaClient.$disconnect()
	})
