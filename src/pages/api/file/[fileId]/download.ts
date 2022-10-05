import {FileSource}  from "@/puff-smith/service/file/FileSource";
import {GetEndpoint} from "@leight-core/server";
import fs            from "node:fs";

export default GetEndpoint<"Download", string, { fileId: string }>({
	handler: async ({res, query: {fileId}}) => {
		try {
			const file = await FileSource().get(fileId);
			res.writeHead(200, {
				"Content-Type":   file.mime,
				"Content-Length": file.size,
			});
			fs.createReadStream(file.location).pipe(res);
		} catch (e) {
			res.status(404).end();
		}
	},
});
