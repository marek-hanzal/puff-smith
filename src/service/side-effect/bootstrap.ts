import {IMPORT_JOB} from "@/puff-smith/jobs/import/interface";
import {BootstrapLogger} from "@leight-core/server";
import {collectDefaultMetrics, register} from "prom-client";

const Bootstrap = (version: string = process.env.NEXT_PUBLIC_VERSION || "edge") => {
	BootstrapLogger({
		loggers: [
			"job",
			"service",
			"endpoint",
			"auth",
			"query",
			IMPORT_JOB,
		],
		version,
		level: "debug",
	});
	try {
		register.setDefaultLabels({
			app: "puff-smith",
			version,
		});
		collectDefaultMetrics({
			prefix: "puff_smith_",
			register,
		});
	} catch (e) {
	}
};

Bootstrap();
