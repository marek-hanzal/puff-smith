import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {SetupDto} from "@/sdk/puff-smith/setup/dto";

export interface ISetupEditButtonProps extends Partial<IButtonLinkProps> {
	setup: SetupDto
}

export const SetupEditButton: FC<ISetupEditButtonProps> = ({setup, ...props}) => {
	return <ButtonLink
		size={'large'}
		href={'/lab/setup/[setupId]/edit'}
		query={{setupId: setup.id}}
		icon={<EditIcon/>}
		title={'lab.setup.button.edit'}
		{...props}
	/>;
}
