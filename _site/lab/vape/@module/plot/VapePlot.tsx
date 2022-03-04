import {Column} from "@ant-design/plots";
import {usePlotQuery, useVapesOptionalFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Result, ResultProps} from "antd";
import {BarChartOutlined} from "@ant-design/icons";
import {toHumanNumber} from "@leight-core/common";

export type SelectedEnum = 'median' | 'rating' | 'min' | 'max' | 'average' | string;

export interface IVapePlotProps {
	selected?: SelectedEnum[];
	enabled?: SelectedEnum[];
	emptyResultProps?: ResultProps;
}

export const VapePlot: FC<IVapePlotProps> = ({selected, emptyResultProps}) => {
	const {t} = useTranslation();
	const filterContext = useVapesOptionalFilterContext();
	const plotQuery = usePlotQuery({filter: filterContext?.filter});

	return plotQuery?.data?.data?.length ?
		<Column
			animation={false}
			meta={{
				value: {
					min: 0,
					max: 9,
					formatter: value => toHumanNumber(value, 2),
				}
			}}
			loading={plotQuery.isLoading}
			isStack={plotQuery?.data?.isStack}
			isGroup={plotQuery?.data?.isGroup}
			xField={plotQuery?.data?.x || 'x'}
			yField={plotQuery?.data?.y || 'y'}
			seriesField={plotQuery?.data?.group}
			minColumnWidth={16}
			legend={{
				position: 'top-left',
				selected: ((selected?: SelectedEnum[]): { [index in SelectedEnum]: boolean } => {
					const values: SelectedEnum[] = ['min', 'max', 'average', 'rating', 'median'];
					const object: any = {};
					selected = selected || values;
					values.forEach(item => {
						object[t('lab.vape.plot.' + item + '.label')] = false;
					})
					selected.forEach(item => {
						object[t('lab.vape.plot.' + item + '.label')] = true;
					})
					return object;
				})(selected),
				title: {
					text: t('lab.vape.plot.title'),
					spacing: 6,
					style: {fontSize: 16},
				},
			}}
			label={{
				layout: [
					{
						type: 'interval-adjust-position',
					},
					{
						type: 'interval-hide-overlap',
					},
					{
						type: 'adjust-color',
					},
				],
			}}
			data={plotQuery?.data?.data.map(data => ({
				...data,
				column: t('lab.vape.plot.' + data.column + '.column'),
				group: t('lab.vape.plot.' + data.group + '.label'),
			})) || []}
		/> :
		<Result
			icon={<BarChartOutlined/>}
			title={t('lab.vape.plot.no-data.title')}
			subTitle={t('lab.vape.plot.no-data.subtitle')}
			{...emptyResultProps}
		/>
}