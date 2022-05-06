import {DrawSourceControlProvider, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/atomizer/draw/query";
import {FC} from "react";

export interface IAtomizerDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const AtomizerDrawSelect: FC<IAtomizerDrawSelectProps> = props => {
	return <DrawSourceControlProvider>
		<DrawSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</DrawSourceControlProvider>;
};
