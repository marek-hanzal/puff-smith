import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {WireSelect} from "@/puff-smith/site/lab/wire";
import {Slider} from "antd";
import {CoilFilterDto} from "@/sdk/puff-smith/coil/dto";

export interface ICoilFilterProps extends IFilterWithoutTranslationProps<CoilFilterDto> {
}

export const CoilFilter: FC<ICoilFilterProps> = props => {
	return <Filter<CoilFilterDto>
		translation={'lab.coil'}
		{...props}
	>
		<FormItem
			field={'wireIds'}
			labels={['lab.coil.wireId.label']}
		>
			<WireSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'wraps'}
			labels={['lab.coil.wraps.label']}
		>
			<Slider
				range={true}
				min={0}
				max={12}
				marks={{
					0: 0,
					6: 6,
					7: 7,
					8: 8,
					9: 9,
					12: 12,
				}}
			/>
		</FormItem>
		<FormItem
			field={'ohm'}
			labels={['lab.coil.ohm.label']}
		>
			<Slider
				range={true}
				step={0.1}
				min={0}
				max={2}
				marks={{
					0: 0,
					2: 2,
				}}
			/>
		</FormItem>
	</Filter>
}
