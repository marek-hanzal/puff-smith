import {IMixturesSourceSelectProps, MixturesSourceSelect} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {FC} from "react";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";

export interface IMixtureSelectProps extends Partial<IMixturesSourceSelectProps> {
}

export const MixtureSelect: FC<IMixtureSelectProps> = props => {
	return <MixturesSourceSelect
		showSearch
		toOption={mixture => ({
			label: <MixtureInline mixture={mixture}/>,
			value: mixture.id,
		})}
		{...props}
	/>
}
