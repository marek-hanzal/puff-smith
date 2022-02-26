import {IMixturesSourceSelectProps, MixturesSourceSelect} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {FC} from "react";
import {MixtureInline} from "../component/MixtureInline";

export interface IMixtureSelectProps extends Partial<IMixturesSourceSelectProps> {
}

export const MixtureSelect: FC<IMixtureSelectProps> = props => {
	return <MixturesSourceSelect
		showSearch
		source={{
			filter: {
				active: true,
			}
		}}
		toOption={mixture => ({
			label: <MixtureInline mixture={mixture}/>,
			value: mixture.id,
		})}
		{...props}
	/>
}
