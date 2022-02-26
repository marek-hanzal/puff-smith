import {FC} from "react";
import {CottonsSourceSelect, ICottonsSourceSelectProps} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {CottonInline} from "../component/CottonInline";

export interface ICottonSelectProps extends Partial<ICottonsSourceSelectProps> {
}

export const CottonSelect: FC<ICottonSelectProps> = props => {
	return <CottonsSourceSelect
		showSearch
		toOption={cotton => ({
			label: <CottonInline cotton={cotton}/>,
			value: cotton.id,
		})}
		{...props}
	/>
}
