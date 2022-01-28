import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BuildIcon} from "@/puff-smith";

export interface IBuildLinkButtonProps extends Partial<IButtonLinkProps> {
	build: BuildDto
}

export const BuildLinkButton: FC<IBuildLinkButtonProps> = ({build, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/build/[buildId]'}
		query={{buildId: build.id}}
		icon={<BuildIcon/>}
		title={'lab.build.button.index'}
		{...props}
	/>;
}
