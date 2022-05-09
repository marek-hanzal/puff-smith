import {DrawSourceControlProvider, DrawSourceSelect, IDrawSourceSelectProps} from "@/sdk/api/wire/draw/query";
import {FC} from "react";

export interface IWireDrawSelectProps extends Partial<IDrawSourceSelectProps> {
}

export const WireDrawSelect: FC<IWireDrawSelectProps> = props => {
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
