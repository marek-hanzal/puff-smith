import fileService from "@/puff-smith/service/side-effect/fileService";
import {ChunkService} from "@leight-core/server";

export const chunkService = ChunkService({
	fileService,
});
