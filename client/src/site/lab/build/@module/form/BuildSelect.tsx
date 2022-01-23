import {BuildsSourceSelect, IBuildsSourceSelectProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {BuildInline} from "@/puff-smith/site/lab/build";

export interface IBuildSelectProps extends Partial<IBuildsSourceSelectProps> {
}

export const BuildSelect: FC<IBuildSelectProps> = props => {
	return <BuildsSourceSelect
		showSearch
		optionLabelProp={'name'}
		toOption={build => ({
			label: <BuildInline build={build}/>,
			value: build.id,
			...build,
		})}
		{...props}
	/>
}
