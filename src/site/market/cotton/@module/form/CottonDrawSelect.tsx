import {DrawSourceControlProvider, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/cotton/draw/query";
import {FC} from "react";

export interface ICottonDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const CottonDrawSelect: FC<ICottonDrawSelectProps> = props => {
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
