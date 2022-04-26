import {FileService} from "@leight-core/server";

const fileService = FileService({
	config: {
		path: ".data/file/{fileId}",
	}
});

export default fileService;
