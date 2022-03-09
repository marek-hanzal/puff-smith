import {Agenda} from "agenda";
import xlsx from 'xlsx';
import fileService from "@/puff-smith/service/file";
import {toImport} from "@/puff-smith/import";

export const ImportJobName = 'import';

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, async ({attrs: {data: {fileId}}}: any) => {
		console.log(`Preparing import of [${fileId}].`);

		const workbook = xlsx.readFile(fileService.toLocation(fileId));

		console.log(`Available sheets [${workbook.SheetNames.join(', ')}].`);

		await toImport(workbook, {
			translation: item => {
				console.log('Importing translation', item);
			},
		});

		console.log(`Import of [${fileId}] done.`);
	})
};
