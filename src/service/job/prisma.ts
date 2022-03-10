import {IJobCreate} from "@/puff-smith/service/job/interface";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";

export async function jobCreate(job: IJobCreate, prismaClient: IPrismaClientTransaction = prisma) {
	return await prismaClient.job.create({
		data: {
			...job,
			params: job.params && JSON.stringify(job.params),
			created: new Date(),
		}
	})
}
