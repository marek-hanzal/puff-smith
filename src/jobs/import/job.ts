import {IImportJobParams, IMPORT_JOB} from "@/puff-smith/jobs/import/interface";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {VoucherSource} from "@/puff-smith/service/voucher/VoucherSource";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {IJobProcessor} from "@leight-core/api";
import {toImport} from "@leight-core/server";
import PQueue from "p-queue";
import xlsx from "xlsx";

const importers = {
	...AromaSource().importers(),
	...AtomizerSource().importers(),
	...BaseSource().importers(),
	...BoosterSource().importers(),
	...CellSource().importers(),
	...CertificateSource().importers(),
	...CoilSource().importers(),
	...CottonSource().importers(),
	...FiberSource().importers(),
	...LicenseSource().importers(),
	...ModSource().importers(),
	...PriceSource().importers(),
	...TagSource().importers(),
	...TariffSource().importers(),
	...TokenSource().importers(),
	...TranslationSource().importers(),
	...VendorSource().importers(),
	...VoucherSource().importers(),
	...WireSource().importers(),
};

export const ImportJob: IJobProcessor<IImportJobParams> = JobSource().processor(IMPORT_JOB, async ({logger, job, params: {fileId}, jobProgress}) => {
	const labels = {jobId: job.id};
	logger = logger.child({labels, jobId: labels.jobId});
	logger.info("Checking fileId");
	if (!fileId) {
		await jobProgress.setResult("REVIEW");
		logger.error(`Missing fileId for [${IMPORT_JOB}].`, {labels});
		return;
	}
	logger = logger.child({labels: {...labels, fileId}, fileId});
	const workbook = xlsx.readFile(fileService.toLocation(fileId));
	logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
	await toImport({
		user: await UserSource().asUser(job.userId),
		job,
		jobProgress,
		workbook,
		importers,
	});
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval: 1,
}));
