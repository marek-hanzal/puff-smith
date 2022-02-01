import {FC} from "react";
import {FormItem} from "@leight-core/leight";
import {Filter, IFilterWithoutTranslationProps} from "@/puff-smith";
import {VendorSelect} from "@/puff-smith/site/lab/vendor";

export interface ILiquidFilterProps extends IFilterWithoutTranslationProps {
}

export const LiquidFilter: FC<ILiquidFilterProps> = props => {
	return <Filter
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
