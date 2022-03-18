import {IJob} from "@leight-core/api";
import {Job} from '@prisma/client';
import {IJobs} from "@/puff-smith/service/job";

export const jobListMapper = async (jobs: IJobs) => (await jobs).map(jobMapper);

export const jobMapper = <TParams = any>(job: Job): IJob<TParams> => {
	return {
		...job,
		progress: job.progress?.toNumber(),
		successRatio: job.successRatio?.toNumber(),
		failureRatio: job.failureRatio?.toNumber(),
		skipRatio: job.skipRatio?.toNumber(),
		params: job.params && JSON.parse(job.params),
	};
}
