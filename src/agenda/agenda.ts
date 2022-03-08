import {Agenda as CoolAgenda} from 'agenda';

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

export const asyncJob = async (job: string, params: any) => {
	console.log(`Async job [${job}].`);
	await (await Agenda()).now(job, params);
	console.log(`[${job}] done.`);
}

export default agenda;
