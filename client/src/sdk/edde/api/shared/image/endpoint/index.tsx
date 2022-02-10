import {createPostMutation} from "@leight-core/leight";

export type IUpdateQueryParams = void;


export const useUpdateMutation = createPostMutation<IUpdateQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>("Edde.Shared.Image.Update");
