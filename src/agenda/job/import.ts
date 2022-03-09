import {Agenda} from "agenda";
import xlsx from 'xlsx';
import fileService from "@/puff-smith/service/file";
import {toMeta} from "@/puff-smith/import";

export const ImportJobName = 'import';

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, ({attrs: {data: {fileId}}}: any) => {
		console.log(`Preparing import of [${fileId}].`);

		const workbook = xlsx.readFile(fileService.toLocation(fileId));

		console.log(`Available sheets [${workbook.SheetNames.join(', ')}].`);

		const meta = toMeta(workbook);
		console.log('Meta', meta);


		console.log(`Import of [${fileId}] done.`);
	})
};
