import {ITasteSourceSelectProps, TasteSourceControlProvider, TasteSourceSelect} from "@/sdk/api/aroma/taste/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaTasteSelectProps extends Partial<ITasteSourceSelectProps> {
}

export const AromaTasteSelect: FC<IAromaTasteSelectProps> = props => {
	const {t} = useTranslation();
	return <TasteSourceControlProvider>
		<TasteSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: t(`common.taste.${item.code}`, item.code),
			})}
			{...props}
		/>
	</TasteSourceControlProvider>;
};
