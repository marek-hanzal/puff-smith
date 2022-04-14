import {fileFetch} from "@/puff-smith/service/file";
import {FetchEndpoint} from "@leight-core/server";
import fs from "node:fs";

export default FetchEndpoint<"Download", string, { fileId: string }>(async ({res, query: {fileId}}) => {
	try {
		const file = await fileFetch(fileId);
		res.writeHead(200, {
			"Content-Type": file.mime,
			"Content-Length": file.size,
		});
		fs.createReadStream(file.location).pipe(res);
	} catch (e) {
		res.status(404).end();
	}
});
