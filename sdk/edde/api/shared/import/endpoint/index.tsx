import {createPostMutation} from "@leight-core/leight";

export type IExcelQueryParams = void;


export const useExcelMutation = createPostMutation<IExcelQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>("Edde.Shared.Import.Excel");
