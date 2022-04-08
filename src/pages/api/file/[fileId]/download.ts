import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {fileFetch} from "@/puff-smith/service/file";
import {FetchEndpoint} from "@leight-core/server";
import fs from "node:fs";

ServerBootstrap();

export default FetchEndpoint<"Download", string, { fileId: string }>(async ({res, query: {fileId}}) => {
	const file = await fileFetch(fileId);
	if (!file) {
		res.status(404).end();
		return;
	}
	res.writeHead(200, {
		"Content-Type": file.mime,
		"Content-Length": file.size,
	});
	fs.createReadStream(file.location).pipe(res);
});
