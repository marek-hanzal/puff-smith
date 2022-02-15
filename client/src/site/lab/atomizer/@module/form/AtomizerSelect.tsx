import {AtomizersSourceSelect, IAtomizersSourceSelectProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Typography} from "antd";
import {usePuffSmithSessionContext} from "@/puff-smith/site/shared";

export interface IAtomizerSelectProps extends Partial<IAtomizersSourceSelectProps> {
}

export const AtomizerSelect: FC<IAtomizerSelectProps> = ({onSelect, ...props}) => {
	const {user} = usePuffSmithSessionContext().session;
	return <AtomizersSourceSelect
		source={{
			filter: {userId: user.id},
		}}
		showSearch
		toOption={atomizer => ({
			label: <>{atomizer.name}&nbsp;<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text></>,
			value: atomizer.id,
			atomizer,
		})}
		{...props}
	/>
}
