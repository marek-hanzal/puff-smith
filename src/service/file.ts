import {IFile} from "@leight-core/api";
import {FileService} from "@leight-core/server";

const fileService = FileService({
	config: {
		path: '.data/file/{fileId}',
		persistor(file: IFile) {
			console.log('persisting', file);
		}
	}
});

export default fileService;
