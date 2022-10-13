import {toHumanNumber}  from "@leight-core/viv";
import {
	Tooltip,
	Typography
}                       from "antd";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface IOhmProps {
	ohm?: number | null;
	tooltip?: string;
}

export const Ohm: FC<IOhmProps> = ({ohm, tooltip}) => {
	const {t} = useTranslation();
	return ohm ? <Tooltip title={tooltip && t(tooltip)}>
		<Typography.Text>{toHumanNumber(ohm, "-", 3)}</Typography.Text>
		<Typography.Text type={"secondary"}>ohm</Typography.Text>
	</Tooltip> : <>-</>;
};
