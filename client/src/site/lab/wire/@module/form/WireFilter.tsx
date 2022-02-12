import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {WireFilterDto} from "@/sdk/puff-smith/wire/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface IWireFilterProps extends IFilterWithoutTranslationProps<WireFilterDto> {
}

export const WireFilter: FC<IWireFilterProps> = props => {
	return <Filter<WireFilterDto>
		translation={'lab.wire'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.wire.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.wire.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
