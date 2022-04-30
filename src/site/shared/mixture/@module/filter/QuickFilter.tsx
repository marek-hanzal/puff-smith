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
						pgToRound: undefined,
						vgToRound: undefined,
					},
					options: [
						{
							name: "0/100",
							filter: {pgToRound: 100, vgToRound: 0},
						},
						{
							name: "30/70",
							filter: {pgToRound: 70, vgToRound: 30},
						},
						{
							name: "50/50",
							filter: {pgToRound: 50, vgToRound: 50},
						},
						{
							name: "70/30",
							filter: {pgToRound: 30, vgToRound: 70},
						},
						{
							name: "80/20",
							filter: {pgToRound: 20, vgToRound: 80},
						},
						{
							name: "100/0",
							filter: {pgToRound: 0, vgToRound: 100},
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
