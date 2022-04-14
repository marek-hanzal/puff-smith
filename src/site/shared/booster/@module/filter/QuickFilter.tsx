import {NicotineInline} from "@/puff-smith";
import {IBoosterQuery} from "@/puff-smith/service/booster";
import {useBoostersFilterContext} from "@/sdk/api/booster/query";
import {IQueryFilter} from "@leight-core/api";
import {Button, Divider, Radio, Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IQuickFilterProps {
	toFilter?(filter: IQueryFilter<IBoosterQuery>): any;

	fromFilter?(filter: any): IQueryFilter<IBoosterQuery>;
}

export const QuickFilter: FC<IQuickFilterProps> = ({toFilter = filter => filter, fromFilter = filter => filter}) => {
	const {t} = useTranslation();
	const filterContext = useBoostersFilterContext();
	const filter: IQueryFilter<IBoosterQuery> = fromFilter(filterContext.filter);
	const ratioList: { pg: number | undefined, vg: number | undefined }[] = [
		{pg: 70, vg: 30},
		{pg: 50, vg: 50},
		{pg: 30, vg: 70},
		{pg: 20, vg: 80},
		{pg: 0, vg: 100},
	];
	const nicList = [3, 10, 12, 20];
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		<Space>
			<Typography.Text type={"secondary"}>{t("market.filter.pgvg.label")}</Typography.Text>
			<Radio.Group size={"large"} value={`pgvg-${filter?.vg}/${filter?.pg}`}>
				{ratioList.map(pgvg => <Radio.Button
					type={"text"}
					onClick={() => filterContext.mergeFilter(toFilter(pgvg))}
					value={`pgvg-${pgvg.vg}/${pgvg.pg}`}
					key={`pgvg-${pgvg.vg}/${pgvg.pg}`}
				>
					{`${pgvg.vg}/${pgvg.pg}`}
				</Radio.Button>)}
			</Radio.Group>
		</Space>
		<Space>
			<Typography.Text type={"secondary"}>{t("market.filter.nicotine.label")}</Typography.Text>
			<Radio.Group size={"large"} value={`nicotine-${filter?.nicotine}`}>
				{nicList.map(nicotine => <Radio.Button
					type={"link"}
					onClick={() => filterContext.mergeFilter(toFilter({nicotine}))}
					value={`nicotine-${nicotine}`}
					key={`nicotine-${nicotine}`}
				>
					<NicotineInline nicotine={nicotine}/>
				</Radio.Button>)}
			</Radio.Group>
		</Space>
		<Button
			type={"link"}
			size={"large"}
			onClick={() => filterContext.setFilter()}
		>
			{t("common.filter.clear")}
		</Button>
	</Space>;
};
