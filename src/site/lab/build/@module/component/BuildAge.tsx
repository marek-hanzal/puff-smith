import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {durationOf} from "@leight-core/leight";
import {Tooltip} from "antd";
import {useTranslation} from "react-i18next";

export interface IBuildAgeProps {
	build: BuildDto;
}

export const BuildAge: FC<IBuildAgeProps> = ({build}) => {
	const {t} = useTranslation();
	return <Tooltip title={t('lab.build.age.tooltip')}>
		{(build.active ? durationOf(build.created) : durationOf(build.disabledOn || undefined, build.created)).humanize()}
	</Tooltip>
}
