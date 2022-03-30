import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateForm} from "@/puff-smith/site/lab/liquid";
import {IUser} from "@/puff-smith/service/user";
import {useCheckPriceQuery} from "@/sdk/api/transaction/check-price";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
	user?: IUser;
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = ({user, ...props}) => {
	const checkPriceQuery = useCheckPriceQuery({
		price: 'lab.liquid.create',
	});
	return <DrawerButton
		size={'large'}
		type={'primary'}
		ghost
		icon={<LiquidIcon/>}
		title={'lab.liquid.create.title'}
		loading={checkPriceQuery.isFetching && {
			delay: 75,
		}}
		values={checkPriceQuery.isSuccess ? {price: checkPriceQuery.data.price} : {price: '-'}}
		disabled={!(checkPriceQuery.isSuccess && checkPriceQuery.data.pass)}
		{...props}
	>
		<LiquidCreateForm
			toForm={() => ({
				userId: user?.id,
			})}
		/>
	</DrawerButton>
}
