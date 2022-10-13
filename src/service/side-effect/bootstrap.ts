import {BACKUP_JOB}      from "@/puff-smith/jobs/backup/interface";
import {IMPORT_JOB}      from "@/puff-smith/jobs/import/interface";
import {BootstrapLogger} from "@leight-core/viv";

const Bootstrap = (version: string = process.env.NEXT_PUBLIC_VERSION || "edge") => {
	BootstrapLogger({
		loggers: [
			"job",
			"service",
			"endpoint",
			"auth",
			"query",
			IMPORT_JOB,
			BACKUP_JOB,
		],
		version,
		level:   "debug",
	});
};

Bootstrap();
