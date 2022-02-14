import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {WireFilterDto} from "@/sdk/puff-smith/wire/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";

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
			field={'drawIds'}
			labels={['lab.wire.drawIds.label']}
		>
			<DrawSelect/>
		</FormItem>
		<FormItem
			field={'vendorIds'}
			labels={['lab.wire.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
