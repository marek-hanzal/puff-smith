import {IJob} from "@leight-core/api";
import prismaClient from "@/puff-smith/service/prisma";
import {Job} from '@prisma/client';

export const jobListMapper = async (jobs: ReturnType<typeof prismaClient.job.findMany>): Promise<IJob<any>[]> => {
	return (await jobs).map(jobMapper);
}

export const jobMapper = <TParams>(job: Job): IJob<TParams> => {
	return {
		...job,
		progress: job.progress?.toNumber(),
		successRatio: job.successRatio?.toNumber(),
		failureRatio: job.failureRatio?.toNumber(),
		skipRatio: job.skipRatio?.toNumber(),
		params: job.params && JSON.parse(job.params),
	};
}
