import {DrawSourceControlProvider, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/atomizer/draw/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAtomizerDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const AtomizerDrawSelect: FC<IAtomizerDrawSelectProps> = props => {
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
