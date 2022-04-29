import {IInlineFilterProps, InlineFilter} from "@/puff-smith/component/filter/InlineFilter";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory/form/InventoryAromaSelect";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IQuickFilterProps extends Partial<IInlineFilterProps<IMixtureQuery>> {
}

export const QuickFilter: FC<IQuickFilterProps> = props => {
	return <Space split={<Divider type={"vertical"}/>} size={0}>
		<InventoryAromaSelect size={"large"}/>
		<InlineFilter<IMixtureQuery>
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
							name: "0/100",
							filter: {pg: 100, vg: 0},
						},
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
					reset: {nicotineToRound: undefined},
					render: item => <NicotineInline nicotine={item}/>,
					options: [
						{
							name: "0",
							filter: {nicotineToRound: 0},
						},
						{
							name: "6",
							filter: {nicotineToRound: 6},
						},
						{
							name: "10",
							filter: {nicotineToRound: 10},
						},
						{
							name: "12",
							filter: {nicotineToRound: 12},
						},
						{
							name: "18",
							filter: {nicotineToRound: 18},
						},
					]
				}
			]}
			{...props}
		/>
	</Space>;
};
