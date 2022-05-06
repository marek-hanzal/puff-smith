import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {LiquidCreateForm} from "@/puff-smith/site/lab/liquid/@module/form/LiquidCreateForm";
import {MixturePreview} from "@/puff-smith/site/shared/mixture/@module/view/MixturePreview";
import {useCheckPrice} from "@/puff-smith/site/shared/price/@module/hook/useCheckPrice";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
	mixture: IMixture;
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = ({mixture, ...props}) => {
	const checkPrice = useCheckPrice("lab.liquid.create");
	return <DrawerButton
		title={"lab.mixture.liquid.create.title"}
		width={840}
		type={"link"}
		ghost
		icon={<LiquidIcon/>}
		disabled={checkPrice.notPass}
		label={"lab.mixture.liquid.create.button"}
		{...props}
	>
		<MixturePreview mixture={mixture}/>
		<Divider/>
		<LiquidCreateForm mixture={mixture}/>
	</DrawerButton>;
};
