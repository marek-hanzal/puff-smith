import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer";
import {ModSelect} from "@/puff-smith/site/lab/mod";
import {CoilSelect} from "@/puff-smith/site/lab/coil";
import {CottonSelect} from "@/puff-smith/site/lab/cotton";
import {WireSelect} from "@/puff-smith/site/lab/wire";
import {Rate} from "antd";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";

export interface IBuildFilterProps extends IFilterWithoutTranslationProps<BuildFilterDto> {
}

export const BuildFilter: FC<IBuildFilterProps> = props => {
	return <Filter<BuildFilterDto>
		{...props}
		translation={'lab.build'}
	>
		<FormItem
			field={'rating'}
			labels={['lab.build.rating.label']}
		>
			<Rate count={10}/>
		</FormItem>
		<FormItem
			field={'atomizerIds'}
			labels={['lab.build.atomizerId.label']}
		>
			<AtomizerSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'modIds'}
			labels={['lab.build.modId.label']}
		>
			<ModSelect mode={'multiple'} allowClear/>
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
