import {Column} from "@ant-design/plots";
import {usePlotQuery} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {FC} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {useTranslation} from "react-i18next";

export interface IVapePlotProps {
	filter: VapeFilterDto;
}

export const VapePlot: FC<IVapePlotProps> = ({filter}) => {
	const {t} = useTranslation();
	const plotQuery = usePlotQuery({filter});

	return <Column
		meta={{
			median: {
				min: 1,
				max: 200,
				alias: 'hojojo',
				formatter: () => 'hovno',
				range: [0, 10000],
			}
		}}
		loading={plotQuery.isLoading}
		isStack={plotQuery?.data?.isStack}
		isGroup={plotQuery?.data?.isGroup}
		xField={plotQuery?.data?.x || 'x'}
		yField={plotQuery?.data?.y || 'y'}
		seriesField={plotQuery?.data?.group || 'group'}
		legend={{
			position: 'top-left',
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
			// value: data.value.toFixed(2),
			// column: t('lab.vape.plot.' + data.column + '.column'),
			// group: t('lab.vape.plot.' + data.group + '.label'),
		})) || []}
	/>
}
