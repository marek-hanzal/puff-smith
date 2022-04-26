import {IInlineFilterProps, InlineFilter} from "@/puff-smith/component/filter/InlineFilter";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {FC} from "react";

export interface IQuickFilterProps extends Partial<IInlineFilterProps<IBoosterQuery>> {
}

export const QuickFilter: FC<IQuickFilterProps> = props => {
	return <InlineFilter<IBoosterQuery>
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
			},
			{
				name: "nicotine",
				reset: {nicotine: undefined},
				render: item => <NicotineInline nicotine={item}/>,
				options: [
					{
						name: "0",
						filter: {nicotine: 0},
					},
					{
						name: "6",
						filter: {nicotine: 6},
					},
					{
						name: "10",
						filter: {nicotine: 10},
					},
					{
						name: "12",
						filter: {nicotine: 12},
					},
					{
						name: "18",
						filter: {nicotine: 18},
					},
					{
						name: "20",
						filter: {nicotine: 20},
					},
				]
			}
		]}
		{...props}
	/>;
};
