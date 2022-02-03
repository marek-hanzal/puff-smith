import {Column} from "@ant-design/plots";
import {usePlotQuery} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {FC} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {useTranslation} from "react-i18next";

export type SelectedEnum = 'median' | 'rating' | 'min' | 'max' | 'average' | 'count' | string;

export interface IVapePlotProps {
	filter: VapeFilterDto;
	selected?: SelectedEnum[];
}

export const VapePlot: FC<IVapePlotProps> = ({filter, selected}) => {
	const {t} = useTranslation();
	const plotQuery = usePlotQuery({filter});

	return <Column
		meta={{
			value: {
				min: 1,
				max: 10,
				formatter: value => value.toLocaleString(undefined, {
					maximumSignificantDigits: 1,
				}),
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
				const values: SelectedEnum[] = ['min', 'max', 'count', 'average', 'rating', 'median'];
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
	/>
}
