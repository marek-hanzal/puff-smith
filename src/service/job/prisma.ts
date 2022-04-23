import {IJobCreate, IJobFilter, IJobQuery} from "@/puff-smith/service/job/interface";
import {jobListMapper} from "@/puff-smith/service/job/mapper";
import prisma from "@/puff-smith/service/prisma";
import prismaClient from "@/puff-smith/service/prisma";
import {IJobStatus, IPrismaClientTransaction} from "@leight-core/api";
import {toPercent} from "@leight-core/client";
import {toQuery} from "@leight-core/server";

export async function jobCreate(job: IJobCreate, prismaClient: IPrismaClientTransaction = prisma) {
	return await prismaClient.job.create({
		data: {
			...job,
			params: job.params && JSON.stringify(job.params),
			created: new Date(),
		}
	});
}

export const jobQuery = async (query: IJobQuery) => toQuery<typeof jobListMapper, IJobQuery>({
	query,
	source: prismaClient.job,
	mapper: jobListMapper,
});

export const jobCleanup = async (filter?: IJobFilter) => {
	await prismaClient.job.deleteMany(filter && {
		where: filter,
	});
	return true;
};

export const jobCommit = async () => {
	await prismaClient.job.updateMany({
		where: {
			status: {
				in: ["REVIEW", "FAILURE", "SUCCESS"],
			}
		},
		data: {
			status: "DONE",
		}
	});
	return true;
};

export async function jobUpdateStatus(jobId: string, status: IJobStatus) {
	return await prismaClient.job.update({
		data: {
			status,
			finished: ["REVIEW", "SUCCESS", "FAILURE"].includes(status) ? new Date() : undefined,
		},
		where: {
			id: jobId,
		}
	});
}

export async function jobUpdateTotal(jobId: string, total: number) {
	return await prismaClient.job.update({
		data: {
			total,
		},
		where: {
			id: jobId,
		}
	});
}

export async function jobUpdateSuccess(jobId: string, success: number, total: number, processed: number) {
	return await prismaClient.job.update({
		data: {
			success,
			successRatio: toPercent(success, total),
			progress: toPercent(processed, total),
		},
		where: {
			id: jobId,
		}
	});
}

export async function jobUpdateFailure(jobId: string, failure: number, total: number, processed: number) {
	return await prismaClient.job.update({
		data: {
			failure,
			failureRatio: toPercent(failure, total),
			progress: toPercent(processed, total),
		},
		where: {
			id: jobId,
		}
	});
}

export async function jobUpdateSkip(jobId: string, skip: number, total: number, processed: number) {
	return await prismaClient.job.update({
		data: {
			skip,
			skipRatio: toPercent(skip, total),
			progress: toPercent(processed, total),
		},
		where: {
			id: jobId,
		}
	});
}
