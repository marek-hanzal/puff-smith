import {Agenda} from 'agenda';

const agenda = new Agenda({
	db: {
		address: process.env.AGENDA_DB || (() => {
			throw new Error('Missing env variable "AGENDA_DB"!');
		})(),
		collection: 'agenda',
	}
});

export const asyncJob = async (job: string, params: any) => {
	console.log(`Async job [${job}].`);
	return agenda.on("ready", async () => {
		console.log(`Adding [${job}] to queue.`);
		await agenda.now(job, params);
		console.log(`[${job}] done.`);
	});
}

export default agenda;
