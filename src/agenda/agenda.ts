import {jobCreate, jobMapper} from "@/puff-smith/service/job";
import prismaClient from "@/puff-smith/service/prisma";
import {IJob} from "@leight-core/api";
import {Logger} from "@leight-core/server";
import {Agenda as CoolAgenda} from "agenda";

const agenda = new CoolAgenda({
	db: {
		address: process.env.AGENDA_DB || (() => {
			throw new Error("Missing env variable \"AGENDA_DB\"!");
		})(),
		collection: "agenda",
	}
});

export async function Agenda(): Promise<CoolAgenda> {
	await agenda.start();
	return agenda;
}

export const asyncJob = async <TParams>(name: string, params: TParams, userId?: string | null): Promise<IJob<TParams> | void> => {
	const logger = Logger("job");
	logger.info("New job", {labels: {job: name}, params, userId});
	return prismaClient.$transaction(async prisma => {
		const job = jobMapper<TParams>(await jobCreate({
			userId,
			name,
			params,
		}, prisma));
		logger.debug("Scheduling agenda job", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		await (await Agenda()).now(name, job);
		logger.debug("Scheduling done", {labels: {job: name, jobId: job.id}, jobId: job.id, name, params, userId});
		return job;
	});
};

export default agenda;
