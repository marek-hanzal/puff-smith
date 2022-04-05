import {fileService} from "@/puff-smith/service/file";
import {ChunkService} from "@leight-core/server";

export const chunkService = ChunkService({
	fileService,
});
