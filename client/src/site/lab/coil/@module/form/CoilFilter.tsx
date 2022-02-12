import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {WireSelect} from "@/puff-smith/site/lab/wire";
import {CoilFilterDto} from "@/sdk/puff-smith/coil/dto";
import {WrapsInput} from "@/puff-smith/site/lab/coil/@module/form/input/WrapsInput";

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
			<WrapsInput range/>
		</FormItem>
	</Filter>
}
