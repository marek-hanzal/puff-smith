import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {CoilSelect} from "@/puff-smith/site/lab/coil/@module/form/CoilSelect";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {WireSelect} from "@/puff-smith/site/lab/wire/@module/form/WireSelect";

export interface IBuildFilterProps extends IFilterWithoutTranslationProps<BuildFilterDto> {
}

export const BuildFilter: FC<IBuildFilterProps> = props => {
	return <Filter<BuildFilterDto>
		{...props}
		translation={'lab.build'}
	>
		<FormItem
			field={'atomizerIds'}
			labels={['lab.build.atomizerId.label']}
		>
			<AtomizerSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'coilIds'}
			labels={['lab.build.coilId.label']}
		>
			<CoilSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'wireIds'}
			labels={['lab.build.wireId.label']}
		>
			<WireSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'cottonIds'}
			labels={['lab.build.cottonId.label']}
		>
			<CottonSelect mode={'multiple'} allowClear/>
		</FormItem>
	</Filter>
}
