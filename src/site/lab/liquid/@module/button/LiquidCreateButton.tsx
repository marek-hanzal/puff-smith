import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateForm} from "@/puff-smith/site/lab/liquid";
import {useCheckPriceQuery} from "@/sdk/api/transaction/check-price";
import {useAromasInventoryQuery} from "@/sdk/api/aroma/inventory/query";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	const checkPriceQuery = useCheckPriceQuery({
		price: 'lab.liquid.create',
	});
	const aromasInventoryQuery = useAromasInventoryQuery();
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
		disabled={!(checkPriceQuery.isSuccess && checkPriceQuery.data.pass && aromasInventoryQuery.isSuccess && aromasInventoryQuery.data.count)}
		{...props}
	>
		<LiquidCreateForm/>
	</DrawerButton>
}
