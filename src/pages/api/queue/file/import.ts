import {Queue} from "quirrel/next"

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default Queue(
	"api/queue/file/import",
	async job => {
		console.log('job started!', job);
		await sleep(10000 * 6);
		console.log('job done!', job);
	}
)
