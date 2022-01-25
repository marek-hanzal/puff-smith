import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import dayjs from "dayjs";

export interface IMixtureAgeProps {
	mixture: MixtureDto;
}

export const MixtureAge: FC<IMixtureAgeProps> = ({mixture}) => {
	// @ts-ignore
	const age = dayjs.duration(dayjs().diff(mixture.mixed)).humanize();
	return <>{age}</>;
}
