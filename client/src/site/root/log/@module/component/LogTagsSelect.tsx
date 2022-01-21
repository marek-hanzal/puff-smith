import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ILogTagsSourceSelectProps, LogTagsSourceSelect} from "@/sdk/edde/api/root/log/endpoint";

export interface ILogTagsSelectProps extends Partial<ILogTagsSourceSelectProps> {
}

export const LogTagsSelect: FC<ILogTagsSelectProps> = props => {
	const {t} = useTranslation();
	return <LogTagsSourceSelect
		showSearch={false}
		mode={"multiple"}
		allowClear
		toOption={item => ({value: item.id, label: t("label." + item.label)})}
		{...props}
	/>;
};
