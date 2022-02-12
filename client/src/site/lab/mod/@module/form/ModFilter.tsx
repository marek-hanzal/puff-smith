import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {ModFilterDto} from "@/sdk/puff-smith/mod/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface IModFilterProps extends IFilterWithoutTranslationProps<ModFilterDto> {
}

export const ModFilter: FC<IModFilterProps> = props => {
	return <Filter<ModFilterDto>
		translation={'lab.mod'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.mod.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.mod.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
