import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {LineChartOutlined} from "@ant-design/icons";
import {durationOf, toLocalDateTime} from "@leight-core/client";
import {Space, Tooltip, Typography} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidSteepingProps {
	liquid: ILiquid;
}

export const LiquidSteeping: FC<ILiquidSteepingProps> = ({liquid}) => {
	const {t} = useTranslation();
	if (!liquid.mixture.aroma.steep) {
		return <>-</>;
	}
	const age = durationOf(liquid.mixed).asDays();
	if (age >= liquid.mixture.aroma.steep) {
		return <Tooltip title={t("lab.liquid.steep.done.tooltip", {data: {mixed: toLocalDateTime(liquid.mixed)}})}>
			<Typography.Text type={"success"}>{t("lab.liquid.steep.done")}</Typography.Text>
		</Tooltip>;
	}
	const ageDuration = dayjs.duration(age, "day").humanize();
	const steepDuration = dayjs.duration(liquid.mixture.aroma.steep, "day").humanize();

	return <Tooltip title={t("lab.liquid.steeping.tooltip", {data: {mixed: toLocalDateTime(liquid.mixed)}})}>
		<Space>
			<Typography.Text type={"secondary"}>
				<LineChartOutlined/>
			</Typography.Text>
			<Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
				<Typography.Text>{ageDuration}</Typography.Text>
				<Typography.Text type={"secondary"}>{steepDuration}</Typography.Text>
			</Space>
		</Space>
	</Tooltip>;
};
