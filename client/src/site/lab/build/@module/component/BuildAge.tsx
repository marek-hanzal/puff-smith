import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {durationOf} from "@leight-core/leight/dist";

export interface IBuildAgeProps {
	build: BuildDto;
}

export const BuildAge: FC<IBuildAgeProps> = ({build}) => {
	return <>{(build.active ? durationOf(build.created) : durationOf(build.disabledOn || undefined, build.created)).humanize()}</>
}
