import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import dayjs from "dayjs";
import {Space, Typography} from "antd";
import {useTranslation} from "react-i18next";

export interface IMixtureSteepingProps {
	mixture: MixtureDto;
}

export const MixtureSteeping: FC<IMixtureSteepingProps> = ({mixture}) => {
	const {t} = useTranslation();
	if (!mixture.steep) {
		return <>-</>;
	}
	// @ts-ignore
	const age = dayjs.duration(dayjs().diff(mixture.mixed)).asDays();
	if (age >= mixture.steep) {
		return <Typography.Text type={'success'}>{t('lab.mixture.steep.done')}</Typography.Text>;
	}
	// @ts-ignore
	const ageDuration = dayjs.duration(age, "day").humanize();
	// @ts-ignore
	const steepDuration = dayjs.duration(mixture.steep, "day").humanize();

	return <Space>
		<span>{ageDuration}</span>/<Typography.Text type={'secondary'}>{steepDuration}</Typography.Text>
	</Space>;
}
