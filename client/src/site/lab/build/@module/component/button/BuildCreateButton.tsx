import {ButtonLink, CreateIcon} from "@leight-core/leight";
import {IButtonLinkProps} from "@leight-core/leight/dist";
import {FC} from "react";

export interface IBuildCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const BuildCreateButton: FC<IBuildCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		href={'/lab/build/create'}
		icon={<CreateIcon/>}
		title={'lab.build.button.create'}
		{...props}
	/>;
}
