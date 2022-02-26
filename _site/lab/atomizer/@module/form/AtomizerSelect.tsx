import {AtomizersSourceSelect, IAtomizersSourceSelectProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {usePuffSmithSessionContext} from "../../../../shared";
import {AtomizerInline} from "../component/AtomizerInline";

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
			label: <AtomizerInline atomizer={atomizer}/>,
			value: atomizer.id,
		})}
		{...props}
	/>
}
