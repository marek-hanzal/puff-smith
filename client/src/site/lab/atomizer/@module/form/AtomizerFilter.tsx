import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {AtomizerFilterDto} from "@/sdk/puff-smith/atomizer/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor";

export interface IAtomizerFilterProps extends IFilterWithoutTranslationProps<AtomizerFilterDto> {
}

export const AtomizerFilter: FC<IAtomizerFilterProps> = props => {
	return <Filter<AtomizerFilterDto>
		translation={'lab.atomizer'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.atomizer.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.atomizer.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
