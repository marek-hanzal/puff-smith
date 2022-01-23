import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface ISetupListButtonProps extends Partial<IButtonLinkProps> {
}

export const SetupListButton: FC<ISetupListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/setup/list'}
		icon={<ListIcon/>}
		title={'lab.setup.button.list'}
		{...props}
	/>
}
