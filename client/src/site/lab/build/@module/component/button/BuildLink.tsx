import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BuildIcon} from "@/puff-smith";

export interface IBuildLinkProps extends Partial<IButtonLinkProps> {
	build: BuildDto
}

export const BuildLink: FC<IBuildLinkProps> = ({build, ...props}) => {
	return <ButtonLink
		size={'middle'}
		type={'link'}
		href={'/lab/build/[buildId]'}
		query={{buildId: build.id}}
		icon={<BuildIcon/>}
		title={build.name}
		{...props}
	/>;
}
