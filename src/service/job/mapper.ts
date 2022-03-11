import {jobCreate} from "@/puff-smith/service/job/prisma";
import {IJob} from "@leight-core/api";

export const jobMapper = async <TParams>(promise: ReturnType<typeof jobCreate>): Promise<IJob<TParams>> => {
	const job = await promise;
	return {
		...job,
		progress: job.progress?.toNumber(),
		successRatio: job.successRatio?.toNumber(),
		failureRatio: job.failureRatio?.toNumber(),
		skipRatio: job.skipRatio?.toNumber(),
		params: job.params && JSON.parse(job.params),
	};
}
