import {
	createPostMutation,
	createPostQuery
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IExcelQueryParams = void;


export const useExcelMutation = createPostMutation<IExcelQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>("Edde.Shared.Import.Excel");