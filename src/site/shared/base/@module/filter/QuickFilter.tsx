import {IBaseQuery} from "@/puff-smith/service/base";
import {useBasesFilterContext} from "@/sdk/api/base/query";
import {IQueryFilter} from "@leight-core/api";
import {Button, Divider, Radio, Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IQuickFilterProps {
	toFilter?(filter: IQueryFilter<IBaseQuery>): any;

	fromFilter?(filter: any): IQueryFilter<IBaseQuery>;
}

export const QuickFilter: FC<IQuickFilterProps> = ({toFilter = filter => filter, fromFilter = filter => filter}) => {
	const {t} = useTranslation();
	const filterContext = useBasesFilterContext();
	const filter: IQueryFilter<IBaseQuery> = fromFilter(filterContext.filter);
	const ratioList: { pg: number | undefined, vg: number | undefined }[] = [
		{pg: 70, vg: 30},
		{pg: 50, vg: 50},
		{pg: 30, vg: 70},
		{pg: 20, vg: 80},
		{pg: 0, vg: 100},
	];
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
		<Button
			type={"link"}
			size={"large"}
			onClick={() => filterContext.setFilter()}
		>
			{t("common.filter.clear")}
		</Button>
	</Space>;
};
