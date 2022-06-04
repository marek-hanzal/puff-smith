import {AromaTasteProviderControl, AromaTasteSourceSelect, IAromaTasteSourceSelectProps} from "@/sdk/api/inventory/mixture/aroma/taste/query";
import {ComponentProps, FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureTasteSelectProps extends Partial<IAromaTasteSourceSelectProps> {
	control?: ComponentProps<typeof AromaTasteProviderControl>;
}

export const MixtureTasteSelect: FC<IMixtureTasteSelectProps> = ({control, ...props}) => {
	const {t} = useTranslation();
	return <AromaTasteProviderControl
		{...control}
	>
		<AromaTasteSourceSelect
			toOption={item => ({
				value: item.id,
				label: t(`common.taste.${item.code}`, item.code),
			})}
			{...props}
		/>
	</AromaTasteProviderControl>;
};
