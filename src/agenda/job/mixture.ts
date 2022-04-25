import {JobService} from "@/puff-smith/service/job";
import {Agenda} from "agenda";

export const MixtureJobName = "job.mixture";

export default function MixtureJob(agenda: Agenda) {
	agenda.define(MixtureJobName, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle(MixtureJobName, async () => {
	}));
}
