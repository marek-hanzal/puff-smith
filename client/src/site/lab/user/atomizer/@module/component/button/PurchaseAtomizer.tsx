import {DrawerButton, IDrawerButtonProps, IFormOnSuccess} from "@leight-core/leight/dist";
import {FC} from "react";
import {PurchaseIcon} from "@/puff-smith";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {PurchaseForm} from "@/puff-smith/site/lab/user/atomizer/@module/form/PurchaseForm";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";

export interface IPurchaseAtomizerProps extends Partial<IDrawerButtonProps> {
	atomizer: AtomizerDto;
	onPurchase?: IFormOnSuccess<any, UserAtomizerDto>;
}

export const PurchaseAtomizer: FC<IPurchaseAtomizerProps> = ({atomizer, onPurchase, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<PurchaseIcon/>}
		title={'lab.atomizer.purchase.button'}
		{...props}
	>
		<PurchaseForm
			atomizer={atomizer}
			onSuccess={onPurchase}
		/>
	</DrawerButton>
}
