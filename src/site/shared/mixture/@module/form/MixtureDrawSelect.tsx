import {DrawProviderControl, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/mixture/draw/query";
import {ComponentProps, FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureDrawSelectProps extends Partial<IDrawSourceSelectProps> {
	control?: ComponentProps<typeof DrawProviderControl>;
}

export const MixtureDrawSelect: FC<IMixtureDrawSelectProps> = ({control, ...props}) => {
	const {t} = useTranslation();
	return <DrawProviderControl
		{...control}
	>
		<DrawSourceSelect
			toOption={item => ({
				value: item.id,
				label: t(`common.draw.${item.code}`),
			})}
			{...props}
		/>
	</DrawProviderControl>;
};
