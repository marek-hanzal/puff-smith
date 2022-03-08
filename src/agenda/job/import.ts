import {Agenda} from "agenda";

export const ImportJobName = 'import';

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, async ({attrs: {data}}: any) => {
		console.log('running import in agenda!', data);
	})
};
