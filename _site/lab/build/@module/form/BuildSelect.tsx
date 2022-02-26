import {BuildsSourceSelect, IBuildsSourceSelectProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {BuildInline} from "../component/BuildInline";

export interface IBuildSelectProps extends Partial<IBuildsSourceSelectProps> {
}

export const BuildSelect: FC<IBuildSelectProps> = props => {
	return <BuildsSourceSelect
		showSearch
		optionLabelProp={'name'}
		source={{
			filter: {
				active: true,
			}
		}}
		toOption={build => ({
			name: build.atomizer.name,
			label: <BuildInline build={build}/>,
			value: build.id,
			...build,
		})}
		{...props}
	/>
}
