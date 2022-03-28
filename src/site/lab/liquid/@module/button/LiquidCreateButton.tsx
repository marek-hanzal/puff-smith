import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateForm} from "@/puff-smith/site/lab/liquid";
import {IUser} from "@/puff-smith/service/user";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
	user?: IUser;
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = ({user, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'primary'}
		ghost
		icon={<LiquidIcon/>}
		title={'lab.liquid.create.title'}
		{...props}
	>
		<LiquidCreateForm
			toForm={() => ({
				userId: user?.id,
			})}
		/>
	</DrawerButton>;
}
