import {DrawSourceControlProvider, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/aroma/draw/query";
import {FC} from "react";

export interface IAromaDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const AromaDrawSelect: FC<IAromaDrawSelectProps> = props => {
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
