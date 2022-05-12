import {FiberSourceControlProvider, FiberSourceSelect, IFiberSourceSelectProps} from "@/sdk/api/wire/fiber/query";
import {FC} from "react";

export interface IWireFiberSelectProps extends Partial<IFiberSourceSelectProps> {
}

export const WireFiberSelect: FC<IWireFiberSelectProps> = props => {
	return <FiberSourceControlProvider>
		<FiberSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</FiberSourceControlProvider>;
};
