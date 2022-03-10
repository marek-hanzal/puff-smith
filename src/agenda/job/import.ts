import {Agenda} from "agenda";
import xlsx from 'xlsx';
import fileService from "@/puff-smith/service/file";
import {toImport} from "@/puff-smith/import";
import {TranslationImport} from "@/puff-smith/service/translation";
import {measureTime} from "measure-time";
import {miliDuration} from "@leight-core/client";

export const ImportJobName = 'import';

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, async ({attrs: {data: {fileId}}}: any) => {
		console.log(`Preparing import of [${fileId}].`);
		const workbook = xlsx.readFile(fileService.toLocation(fileId));
		console.log(`Available sheets [${workbook.SheetNames.join(', ')}].`);
		const getElapsed = measureTime();
		await toImport(workbook, {
			...TranslationImport,
		});
		console.log(`Import of [${fileId}] done in [${miliDuration(getElapsed().millisecondsTotal)}s].`);
	})
};
