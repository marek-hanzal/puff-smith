import {DrawProviderControl, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/cotton/draw/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICottonDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const CottonDrawSelect: FC<ICottonDrawSelectProps> = props => {
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
