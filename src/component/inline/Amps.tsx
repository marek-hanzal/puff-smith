import {toHumanNumber} from "@leight-core/utils";
import {Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAmpsProps {
	amps?: number | null;
	tooltip?: string;
}

export const Amps: FC<IAmpsProps> = ({tooltip, amps}) => {
	const {t} = useTranslation();
	return amps ? <Tooltip title={tooltip && t(tooltip)}>
		<Typography.Text>{toHumanNumber(amps, "-", 3)}</Typography.Text>
		<Typography.Text type={"secondary"}>A</Typography.Text>
	</Tooltip> : <>-</>;
};
