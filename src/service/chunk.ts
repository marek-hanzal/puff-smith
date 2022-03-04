import {ChunkService} from "@leight-core/server";
import fileService from "@/puff-smith/service/file";

const chunkService = ChunkService({
	fileService,
});

export default chunkService;
