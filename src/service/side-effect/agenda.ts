import {Agenda as CoolAgenda} from "agenda";

const agenda = new CoolAgenda({
	defaultConcurrency: 10,
	defaultLockLimit: 10,
	defaultLockLifetime: 60 * 1000 /** a minute */ * 60 /** an hour */ * 3 /** this is quite a time... */,
	name: "Puff Smith",
	maxConcurrency: 20,
	db: process.env.AGENDA_DB ? {
		address: process.env.AGENDA_DB,
		collection: "agenda",
	} : undefined,
});

export async function Agenda(): Promise<CoolAgenda> {
	await agenda.start();
	return agenda;
}

export default agenda;
