import {AromaTasteProviderControl, AromaTasteSourceSelect, IAromaTasteSourceSelectProps} from "@/sdk/api/aroma/taste/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaTasteSelectProps extends Partial<IAromaTasteSourceSelectProps> {
}

export const AromaTasteSelect: FC<IAromaTasteSelectProps> = props => {
	const {t} = useTranslation();
	return <AromaTasteProviderControl>
		<AromaTasteSourceSelect
			toOption={item => ({
				value: item.id,
				label: t(`common.taste.${item.code}`, item.code),
			})}
			{...props}
		/>
	</AromaTasteProviderControl>;
};
