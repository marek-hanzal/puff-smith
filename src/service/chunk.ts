import {ChunkService} from "@leight-core/server";
import {fileService} from "@/puff-smith/service/file";

export const chunkService = ChunkService({
	fileService,
});
