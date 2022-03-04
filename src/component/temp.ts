import {IFile} from "@leight-core/api";
import {outputFileSync} from "fs-extra";

export interface IChunkServiceConfig {
	path: string;
}

export interface IChunkCommit {
	path: string;
	name: string,
	replace: boolean;
}

export interface IChunkService {
	chunk(chunkId: string, chunk: Buffer): void;

	commit(chunkId: string, commit: IChunkCommit): IFile;
}

export const ChunkService: (config?: IChunkServiceConfig) => IChunkService = (config: IChunkServiceConfig = {path: '.data/chunk/{chunkId}'}) => {
	return {
		chunk(chunkId, chunk) {
			outputFileSync(config.path.replace('{chunkId}', chunkId.split('-').join('/')), chunk, {flag: 'a'});
		},
		commit(chunkId, commit): IFile {
			return {} as any;
		}
	}
}
