import {Agenda as CoolAgenda} from "agenda";

const agenda = new CoolAgenda({
	db: {
		address: process.env.AGENDA_DB || (() => {
			throw new Error(`Missing env variable "AGENDA_DB"!`);
		})(),
		collection: "agenda",
	},
});

export async function Agenda(): Promise<CoolAgenda> {
	await agenda.start();
	return agenda;
}

export default agenda;
