import {COIL_JOB, COILS_JOB} from "@/puff-smith/jobs/coil/interface";
import {IMPORT_JOB} from "@/puff-smith/jobs/import/interface";
import {MIXTURE_INVENTORY_AROMA_JOB, MIXTURE_INVENTORY_BASE_JOB, MIXTURE_INVENTORY_BOOSTER_JOB, MIXTURE_JOB, MIXTURE_USER_JOB, MIXTURES_JOB} from "@/puff-smith/jobs/mixture/interface";
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
			COIL_JOB,
			COILS_JOB,
			IMPORT_JOB,
			MIXTURE_JOB,
			MIXTURES_JOB,
			MIXTURE_USER_JOB,
			MIXTURE_INVENTORY_AROMA_JOB,
			MIXTURE_INVENTORY_BOOSTER_JOB,
			MIXTURE_INVENTORY_BASE_JOB,
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
