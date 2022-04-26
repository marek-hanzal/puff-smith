import {fileService} from "@/puff-smith/service/file/service";
import {ChunkService} from "@leight-core/server";

export const chunkService = ChunkService({
	fileService,
});
