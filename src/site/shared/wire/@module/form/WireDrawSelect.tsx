import {DrawSourceControlProvider, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/wire/draw/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IWireDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const WireDrawSelect: FC<IWireDrawSelectProps> = props => {
	const {t} = useTranslation();
	return <DrawSourceControlProvider>
		<DrawSourceSelect
			toOption={item => ({
				value: item.id,
				label: t(`common.draw.${item.code}`),
			})}
			{...props}
		/>
	</DrawSourceControlProvider>;
};
