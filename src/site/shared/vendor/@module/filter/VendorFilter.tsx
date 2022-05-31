import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {VendorProviderFilter} from "@/sdk/api/vendor/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IVendorFilterProps extends Partial<IFilterProps> {
}

export const VendorFilter: FC<IVendorFilterProps> = ({toFilter = filter => filter, ...props}) => {
	return <VendorProviderFilter
		spaceProps={{
			size: 0,
		}}
		toFilter={filter => filter}
		translation={"common.vendor"}
		{...props}
	>
		<FormItem field={"id"}>
			<VendorSelect
				allowClear
			/>
		</FormItem>
	</VendorProviderFilter>;
};
