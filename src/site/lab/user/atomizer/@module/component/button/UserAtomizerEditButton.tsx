import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";
import {PatchUserAtomizerForm} from "@/puff-smith/site/lab/user/atomizer/@module/form/PatchUserAtomizerForm";

export interface IUserAtomizerEditButtonProps extends Partial<IDrawerButtonProps> {
	userAtomizer: UserAtomizerDto;
}

export const UserAtomizerEditButton: FC<IUserAtomizerEditButtonProps> = ({userAtomizer, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<EditIcon/>}
		title={'lab.atomizer.user.edit.button'}
		{...props}
	>
		<PatchUserAtomizerForm
			userAtomizer={userAtomizer}
		/>
	</DrawerButton>
}
