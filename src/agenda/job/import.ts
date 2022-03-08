import {Agenda} from "agenda";

export const ImportJobName = 'import';

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, ({attrs: {data}}: any) => {
		console.log('running import in agenda!', data);
	})
};
