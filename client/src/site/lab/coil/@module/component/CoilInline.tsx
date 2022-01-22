import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Typography} from "antd";

export interface ICoilInlineProps {
	coil: CoilDto
}

export const CoilInline: FC<ICoilInlineProps> = ({coil}) => {
	return <>
		{coil.code} - <Typography.Text>{coil.wire.name}</Typography.Text>&nbsp;
		<Typography.Text type={'secondary'}>{coil.wire.vendor.name}</Typography.Text><br/>
		<Typography.Text type={'secondary'}>{(coil.wire.ga ? coil.wire.ga + 'GA' : null) || coil.wire.description}</Typography.Text><br/>
		<Typography.Text>{coil.ohm.toFixed(2)}ohm</Typography.Text>
	</>
}
