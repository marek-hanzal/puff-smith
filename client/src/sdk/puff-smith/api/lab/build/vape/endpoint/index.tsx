import {createPostQuery} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IRatingQueryParams = void;


export const useRatingQuery = createPostQuery<IRatingQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>, import("@/sdk/puff-smith/rate/dto/index").RateDto>("PuffSmith.Lab.Build.Vape.Rating");
export const useRatingQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Build.Vape.Rating"])
}
