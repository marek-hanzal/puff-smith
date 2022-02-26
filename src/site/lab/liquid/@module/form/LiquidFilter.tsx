import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/common";
import {LiquidFilterDto} from "@/sdk/puff-smith/liquid/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface ILiquidFilterProps extends IFilterWithoutTranslationProps<LiquidFilterDto> {
}

export const LiquidFilter: FC<ILiquidFilterProps> = props => {
	return <Filter<LiquidFilterDto>
		{...props}
		translation={'lab.liquid'}
	>
		<FormItem
			field={'name'}
			labels={['lab.liquid.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.liquid.vendorId.label']}
		>
			<VendorSelect mode={'multiple'} allowClear/>
		</FormItem>
	</Filter>
}
