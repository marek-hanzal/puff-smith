import {CoilJob, CoilsJob} from "@/puff-smith/cli/jobs/coil";
import {ImportJob} from "@/puff-smith/cli/jobs/import";
import {MigrationJob} from "@/puff-smith/cli/jobs/migrate";
import {MixtureJob, MixturesJob} from "@/puff-smith/cli/jobs/mixture";
import {BootstrapLogger} from "@leight-core/server";
import {collectDefaultMetrics, register} from "prom-client";

const Bootstrap = (version: string = process.env.NEXT_PUBLIC_VERSION || "edge") => {
	BootstrapLogger([
		"job",
		"service",
		"endpoint",
		"auth",
		"query",
		CoilJob.name(),
		CoilsJob.name(),
		ImportJob.name(),
		MigrationJob.name(),
		MixtureJob.name(),
		MixturesJob.name(),
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
