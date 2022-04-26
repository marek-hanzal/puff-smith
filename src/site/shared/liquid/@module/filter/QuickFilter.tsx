import {IInlineFilterProps, InlineFilter} from "@/puff-smith/component/filter/InlineFilter";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {FC} from "react";

export interface IQuickFilterProps extends Partial<IInlineFilterProps<ILiquidQuery>> {
}

export const QuickFilter: FC<IQuickFilterProps> = props => {
	return <InlineFilter<ILiquidQuery>
		translation={"lab.liquid"}
		filters={[
			{
				name: "pgvg",
				reset: {
					pg: undefined,
					vg: undefined,
				},
				options: [
					{
						name: "50/50",
						filter: {
							pg: {
								gte: 42,
								lte: 57,
							},
							vg: {
								gte: 42,
								lte: 57,
							}
						},
					},
					{
						name: "70/30",
						filter: {
							pg: {
								gte: 22,
								lte: 32,
							},
							vg: {
								gte: 67,
								lte: 74,
							}
						},
					},
					{
						name: "80/20",
						filter: {
							pg: {
								gte: 12,
								lte: 22,
							},
							vg: {
								gte: 77,
								lte: 84,
							}
						},
					},
				],
			}
		]}
		{...props}
	/>;
};
