import {AromaTasteSourceSelect, IAromaTasteSourceSelectProps} from "@/sdk/api/inventory/mixture/aroma/taste/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureTasteSelectProps extends Partial<IAromaTasteSourceSelectProps> {
}

export const MixtureTasteSelect: FC<IMixtureTasteSelectProps> = props => {
	const {t} = useTranslation();
	return <AromaTasteSourceSelect
		toOption={item => ({
			value: item.id,
			label: t(`common.taste.${item.code}`, item.code),
		})}
		{...props}
	/>;
};
