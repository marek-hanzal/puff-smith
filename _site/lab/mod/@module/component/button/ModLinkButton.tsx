import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {ModIcon} from "@/puff-smith";

export interface IModLinkButtonProps extends Partial<IButtonLinkProps> {
	mod: ModDto;
}

export const ModLinkButton: FC<IModLinkButtonProps> = ({mod, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/mod/[modId]'}
		query={{modId: mod.id}}
		icon={<ModIcon/>}
		title={'lab.mod.button.index'}
		{...props}
	/>;
}
