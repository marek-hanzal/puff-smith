import {DrawProviderControl, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/inventory/coil/draw/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const CoilDrawSelect: FC<ICoilDrawSelectProps> = props => {
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
