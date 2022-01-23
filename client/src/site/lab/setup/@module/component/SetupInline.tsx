import {FC} from "react";
import {SetupDto} from "@/sdk/puff-smith/setup/dto";

export interface ISetupInlineProps {
	setup: SetupDto;
}

export const SetupInline: FC<ISetupInlineProps> = ({setup}) => {
	return <>
		{setup.name}
	</>
}
