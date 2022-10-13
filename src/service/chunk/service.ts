import fileService    from "@/puff-smith/service/side-effect/fileService";
import {ChunkService} from "@leight-core/viv";

export const chunkService = ChunkService({
	fileService,
});
