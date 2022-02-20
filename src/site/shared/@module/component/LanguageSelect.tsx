import {ILanguageListSourceSelectProps, LanguageListSourceSelect} from "@/sdk/edde/api/shared/endpoint";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILanguageSelectProps extends Partial<ILanguageListSourceSelectProps> {
}

export const LanguageSelect: FC<ILanguageSelectProps> = props => {
	const {t} = useTranslation();
	return <LanguageListSourceSelect
		toOption={item => ({label: t("language." + item.code), value: item.id})}
		showSearch={false}
		allowClear
		{...props}
	/>;
};
