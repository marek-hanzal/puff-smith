import {Column} from "@ant-design/plots";
import {usePlotQuery} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {FC} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {useTranslation} from "react-i18next";
import {Result, ResultProps} from "antd";
import {BarChartOutlined} from "@ant-design/icons";
import {useOptionalFilterContext} from "@leight-core/leight";
import {toHumanNumber} from "@leight-core/leight/dist";

export type SelectedEnum = 'median' | 'rating' | 'min' | 'max' | 'average' | string;

export interface IVapePlotProps {
	selected?: SelectedEnum[];
	emptyResultProps?: ResultProps;
}

export const VapePlot: FC<IVapePlotProps> = ({selected, emptyResultProps}) => {
	const {t} = useTranslation();
	const filterContext = useOptionalFilterContext<VapeFilterDto>();
	const plotQuery = usePlotQuery({filter: filterContext?.filter});

	return plotQuery?.data?.data?.length ?
		<Column
			animation={false}
			meta={{
				value: {
					min: 1,
					max: 10,
					formatter: toHumanNumber,
				}
			}}
			loading={plotQuery.isLoading}
			isStack={plotQuery?.data?.isStack}
			isGroup={plotQuery?.data?.isGroup}
			xField={plotQuery?.data?.x || 'x'}
			yField={plotQuery?.data?.y || 'y'}
			seriesField={plotQuery?.data?.group || 'group'}
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
