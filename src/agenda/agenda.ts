import {Agenda as CoolAgenda} from 'agenda';
import prismaClient from "@/puff-smith/service/prisma";
import {IJob} from "@leight-core/api";
import {jobCreate, jobMapper} from "@/puff-smith/service/job";

const agenda = new CoolAgenda({
	db: {
		address: process.env.AGENDA_DB || (() => {
			throw new Error('Missing env variable "AGENDA_DB"!');
		})(),
		collection: 'agenda',
	}
});

export async function Agenda(): Promise<CoolAgenda> {
	await agenda.start();
	return agenda;
}

export const asyncJob = async <TParams>(name: string, params: TParams, userId?: string): Promise<IJob<TParams> | void> => {
	console.log(`Async job [${name}].`);
	return prismaClient.$transaction(async prisma => {
		const job = jobMapper<TParams>(await jobCreate({
			userId,
			name,
			params,
		}, prisma));
		await (await Agenda()).now(name, job);
		return job;
	});
}

export default agenda;
