import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IBuildListButtonProps extends Partial<IButtonLinkProps> {
}

export const BuildListButton: FC<IBuildListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/build/list'}
		icon={<ListIcon/>}
		title={'lab.build.button.list'}
		{...props}
	/>
}
