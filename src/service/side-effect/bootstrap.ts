import {ImportJobName} from "@/puff-smith/cli/jobs/import";
import {MigrateJobName} from "@/puff-smith/cli/jobs/migrate";
import {MixtureJobName} from "@/puff-smith/cli/jobs/mixture";
import {BootstrapLogger} from "@leight-core/server";
import {collectDefaultMetrics, register} from "prom-client";

const Bootstrap = (version: string = process.env.NEXT_PUBLIC_VERSION || "edge") => {
	BootstrapLogger([
		"job",
		"service",
		"endpoint",
		"auth",
		"query",
		ImportJobName,
		MigrateJobName,
		MixtureJobName,
	], version);
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
