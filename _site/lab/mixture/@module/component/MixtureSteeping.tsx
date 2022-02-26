import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import {Space, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {durationOf} from "@leight-core/common";
import dayjs from "dayjs";

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
		return <Typography.Text type={'success'}>{t('lab.mixture.steep.done')}</Typography.Text>;
	}
	const ageDuration = dayjs.duration(age, "day").humanize();
	const steepDuration = dayjs.duration(mixture.steep, "day").humanize();

	return <Space>
		<span>{ageDuration}</span>/<Typography.Text type={'secondary'}>{steepDuration}</Typography.Text>
	</Space>;
}
