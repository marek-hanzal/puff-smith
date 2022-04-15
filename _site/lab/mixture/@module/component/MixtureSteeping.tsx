import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {durationOf} from "@leight-core/common";
import {Space, Tooltip, Typography} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureSteepingProps {
	mixture: MixtureDto;
}

export const MixtureSteeping: FC<IMixtureSteepingProps> = ({mixture}) => {
	const {t} = useTranslation();
	if (!mixture.steep) {
		return <>-</>;
	}
	const age = durationOf(mixture.mixed).asDays();
	if (age >= mixture.steep) {
		return <Tooltip title={t("lab.mixture.steep.mixed.tooltip", {data: {mixed: durationOf(mixture.mixed).humanize()}})}>
			<Typography.Text type={"success"}>{t("lab.mixture.steep.done")}</Typography.Text>
		</Tooltip>;
	}
	const ageDuration = dayjs.duration(age, "day").humanize();
	const steepDuration = dayjs.duration(mixture.steep, "day").humanize();

	return <Tooltip title={t("lab.mixture.steep.mixed.tooltip", {data: {mixed: durationOf(mixture.mixed).humanize()}})}>
		<Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
			<Typography.Text>{ageDuration}</Typography.Text>
			<Typography.Text type={"secondary"}>{steepDuration}</Typography.Text>
		</Space>
	</Tooltip>;
};
