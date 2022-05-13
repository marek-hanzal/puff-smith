import {ITasteSourceSelectProps, TasteSourceSelect} from "@/sdk/api/mixture/inventory/mixture/aroma/taste/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureTasteSelectProps extends Partial<ITasteSourceSelectProps> {
}

export const MixtureTasteSelect: FC<IMixtureTasteSelectProps> = props => {
	const {t} = useTranslation();
	return <TasteSourceSelect
		toOption={item => ({
			value: item.id,
			label: t(`common.taste.${item.code}`, item.code),
		})}
		{...props}
	/>;
};
