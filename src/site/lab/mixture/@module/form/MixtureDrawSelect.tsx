import {DrawProviderControl, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/inventory/mixture/draw/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const MixtureDrawSelect: FC<IMixtureDrawSelectProps> = props => {
	const {t} = useTranslation();
	return <DrawProviderControl>
		<DrawSourceSelect
			toOption={item => ({
				value: item.id,
				label: t(`common.draw.${item.code}`),
			})}
			{...props}
		/>
	</DrawProviderControl>;
};
