import {IInlineFilterProps, InlineFilter} from "@/puff-smith/component/filter/InlineFilter";
import {IBaseQuery} from "@/puff-smith/service/base/interface";
import {FC} from "react";

export interface IQuickFilterProps extends Partial<IInlineFilterProps<IBaseQuery>> {
}

export const QuickFilter: FC<IQuickFilterProps> = props => {
	return <InlineFilter<IBaseQuery>
		translation={"market.filter.pgvg"}
		filters={[
			{
				name: "pgvg",
				reset: {
					pg: undefined,
					vg: undefined,
				},
				options: [
					{
						name: "30/70",
						filter: {pg: 70, vg: 30},
					},
					{
						name: "50/50",
						filter: {pg: 50, vg: 50},
					},
					{
						name: "70/30",
						filter: {pg: 30, vg: 70},
					},
					{
						name: "80/20",
						filter: {pg: 20, vg: 80},
					},
					{
						name: "100/0",
						filter: {pg: 0, vg: 100},
					},
				],
			}
		]}
		{...props}
	/>;
};
