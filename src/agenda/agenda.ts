import {Agenda as CoolAgenda} from "agenda";

const agenda = new CoolAgenda({
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
