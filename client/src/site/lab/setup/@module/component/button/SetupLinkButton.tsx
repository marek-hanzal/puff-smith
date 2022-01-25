import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {SetupDto} from "@/sdk/puff-smith/setup/dto";
import {SetupIcon} from "@/puff-smith";

export interface ISetupLinkButtonProps extends Partial<IButtonLinkProps> {
	setup: SetupDto
}

export const SetupLinkButton: FC<ISetupLinkButtonProps> = ({setup, ...props}) => {
	return <ButtonLink
		size={'middle'}
		type={'link'}
		href={'/lab/setup/[setupId]'}
		query={{setupId: setup.id}}
		icon={<SetupIcon/>}
		title={'lab.setup.button.index'}
		{...props}
	/>;
}
