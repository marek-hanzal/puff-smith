import {toHumanNumber} from "@leight-core/utils";
import {Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IWattProps {
	watt?: number | null;
	tooltip?: string;
}

export const Watt: FC<IWattProps> = ({tooltip, watt}) => {
	const {t} = useTranslation();
	return watt ? <Tooltip title={tooltip && t(tooltip)}>
		<Typography.Text>{toHumanNumber(watt, "-", 3)}</Typography.Text>
		<Typography.Text type={"secondary"}>W</Typography.Text>
	</Tooltip> : <>-</>;
};
