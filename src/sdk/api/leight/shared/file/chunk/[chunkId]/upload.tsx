import {FC} from "react";
import {Form, IFormProps} from "@leight-core/form";
import {createPostMutation} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";

export const ChunkApiLink = "/api/leight/shared/file/chunk/[chunkId]/upload";

export type IChunkQueryParams = { chunkId: string };

export const useChunkMutation = createPostMutation<IChunkQueryParams, string, void>(ChunkApiLink);

export interface IChunkDefaultFormProps extends Partial<IFormProps<IChunkQueryParams, string, void>> {
}

export const ChunkDefaultForm: FC<IChunkDefaultFormProps> = props => <Form<IChunkQueryParams, string, void>
	useMutation={useChunkMutation}
	{...props}
/>

export const useChunkLink = (): ((query: IChunkQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ChunkApiLink, query);
}
