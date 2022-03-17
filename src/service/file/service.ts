import {FileService} from "@leight-core/server";

export const fileService = FileService({
	config: {
		path: '.data/file/{fileId}',
	}
});
