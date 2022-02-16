import {FC} from "react";
import {ISwitchItemProps, SwitchItem} from "@leight-core/leight/dist";

export interface IDualCoilInputProps extends ISwitchItemProps {
}

export const DualCoilInput: FC<IDualCoilInputProps> = props => {
	return <SwitchItem
		{...props}
	/>
}
