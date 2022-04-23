import {jobUpdateStatus} from "@/puff-smith/service/job";
import {IJob} from "@leight-core/api";
import {Logger} from "@leight-core/server";
import {Agenda, Job, Processor} from "agenda";

export const MixtureJobName = "job.mixture";

export default function MixtureJob(agenda: Agenda) {
	let logger = Logger(MixtureJobName);
	agenda.define(MixtureJobName, {
		concurrency: 1,
		priority: 5,
	}, (async (job: Job<IJob>) => {
		logger.info("Running mixture update");
		const theJob = job.attrs.data;
		if (!theJob) {
			logger.error(`Missing data (job) for mixture job.`);
			return;
		}
		logger.info("Mixtures updated");
		await jobUpdateStatus(theJob.id, "SUCCESS");
	}) as Processor);
}
