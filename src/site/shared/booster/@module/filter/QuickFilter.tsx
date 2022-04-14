import {NicotineInline} from "@/puff-smith";
import {useBoostersFilterContext} from "@/sdk/api/booster/query";
import {Button, Divider, Radio, Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IQuickFilterProps {
}

export const QuickFilter: FC<IQuickFilterProps> = () => {
	const {t} = useTranslation();
	const filterContext = useBoostersFilterContext();
	const ratioList: { pg: number, vg: number }[] = [
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
			<Radio.Group size={"large"} value={`pgvg-${filterContext.filter?.vg}/${filterContext.filter?.pg}`}>
				{ratioList.map(pgvg => <Radio.Button
					type={"text"}
					onClick={() => filterContext.applyFilter(pgvg)}
					value={`pgvg-${pgvg.vg}/${pgvg.pg}`}
					key={`pgvg-${pgvg.vg}/${pgvg.pg}`}
				>
					{`${pgvg.vg}/${pgvg.pg}`}
				</Radio.Button>)}
			</Radio.Group>
		</Space>
		<Space>
			<Typography.Text type={"secondary"}>{t("market.filter.nicotine.label")}</Typography.Text>
			<Radio.Group size={"large"} value={`nicotine-${filterContext.filter?.nicotine}`}>
				{nicList.map(nicotine => <Radio.Button
					type={"link"}
					onClick={() => filterContext.applyFilter({nicotine})}
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
