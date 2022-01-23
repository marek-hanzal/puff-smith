import {ButtonLink, CreateIcon} from "@leight-core/leight";
import {IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface ISetupCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const SetupCreateButton: FC<ISetupCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		href={'/lab/setup/create'}
		icon={<CreateIcon/>}
		title={'lab.setup.button.create'}
		{...props}
	/>;
}
