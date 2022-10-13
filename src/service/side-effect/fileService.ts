import {FileService} from "@leight-core/viv";

const fileService = FileService({
	config: {
		path: ".data/file/{fileId}",
	}
});

export default fileService;
