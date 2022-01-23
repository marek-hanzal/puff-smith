import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";

export interface IMixtureInlineProps {
	mixture: MixtureDto;
}

export const MixtureInline: FC<IMixtureInlineProps> = ({mixture}) => {
	return <>
		{mixture.name}
	</>
}
