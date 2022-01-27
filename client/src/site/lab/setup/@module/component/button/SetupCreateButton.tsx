import {ButtonLink, CreateIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface ISetupCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const SetupCreateButton: FC<ISetupCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/setup/create'}
		icon={<CreateIcon/>}
		title={'lab.setup.button.create'}
		{...props}
	/>;
}
