import {ButtonLink, CreateIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface IBuildCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const BuildCreateButton: FC<IBuildCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/build/create'}
		icon={<CreateIcon/>}
		title={'lab.build.button.create'}
		{...props}
	/>;
}
