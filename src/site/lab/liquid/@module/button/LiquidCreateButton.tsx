import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {PurchaseIcon} from "@/puff-smith";
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
		icon={<PurchaseIcon/>}
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
