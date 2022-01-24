import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {CloneIcon} from "@/puff-smith";

export interface IBuildCloneButtonProps extends Partial<IButtonLinkProps> {
	build: BuildDto
}

export const BuildCloneButton: FC<IBuildCloneButtonProps> = ({build, ...props}) => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/build/[buildId]/clone'}
		query={{buildId: build.id}}
		icon={<CloneIcon/>}
		title={'lab.build.button.clone'}
		{...props}
	/>
}
