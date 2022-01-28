import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";

export interface IBuildEditButtonProps extends Partial<IButtonLinkProps> {
	build: BuildDto
}

export const BuildEditButton: FC<IBuildEditButtonProps> = ({build, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/build/[buildId]/edit'}
		query={{buildId: build.id}}
		icon={<EditIcon/>}
		title={'lab.build.button.edit'}
		{...props}
	/>;
}
