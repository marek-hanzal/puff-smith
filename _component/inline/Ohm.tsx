import {FC} from "react";
import {Typography} from "antd";
import {toHumanNumber} from "@leight-core/utils";

export interface IOhmProps {
	ohm?: number | null;
}

export const Ohm: FC<IOhmProps> = ({ohm}) => {
	return ohm ? <>
		<Typography.Text>{toHumanNumber(ohm, 3)}</Typography.Text>
		<Typography.Text type={'secondary'}>ohm</Typography.Text>
	</> : <>-</>;
}
