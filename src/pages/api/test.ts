import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Test", any, any>(async ({res}) => {
	res.end("ok");
	return new Promise(async resolve => {
		for (let i = 0; i <= 10000; i++) {
			console.log("\n\nStep! " + i);
			await new Promise(resolve => {
				setTimeout(() => resolve(true), 500);
			});
		}
		resolve(true);
	});
});
