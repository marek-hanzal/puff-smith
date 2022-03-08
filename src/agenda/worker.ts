import agenda from "@/puff-smith/agenda/agenda";
import ImportJob from "@/puff-smith/agenda/job/import";

(async function () {
	const jobs = [
		ImportJob,
	];

	console.log('Registering jobs...');
	jobs.map(job => job(agenda))
	console.log('Starting Agenda...');
	await agenda.start();
	console.log('Started!');

	async function graceful() {
		console.log('Graceful shutdown of Agenda');
		await agenda.stop();
		console.log('Done!');
		process.exit(0);
	}

	process.on("SIGTERM", graceful);
	process.on("SIGINT", graceful);
})();
