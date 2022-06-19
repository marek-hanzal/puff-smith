import {ILicenseSourceSelectProps, LicenseProviderControl, LicenseSourceSelect} from "@/sdk/api/license/query";
import {FC} from "react";

export interface ILicenseSelectProps extends Partial<ILicenseSourceSelectProps> {
}

export const LicenseSelect: FC<ILicenseSelectProps> = props => {
	return <LicenseProviderControl>
		<LicenseSourceSelect
			showSearch
			allowClear
			toOption={license => ({
				value: license.id,
				label: license.name,
			})}
			{...props}
		/>
	</LicenseProviderControl>;
};
