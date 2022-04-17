import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateForm} from "@/puff-smith/site/lab/liquid";
import {useCheckPrice} from "@/puff-smith/site/shared/price";
import {DollarCircleOutlined} from "@ant-design/icons";
import {Loader, Template} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidCreateViewProps {
}

export const LiquidCreateView: FC<ILiquidCreateViewProps> = () => {
	const checkPrice = useCheckPrice("lab.liquid.create");
	return <Loader
		icon={<LiquidIcon/>}
		loading={checkPrice.loading}
		error={false}
	>
		{checkPrice.pass ?
			<LiquidCreateForm/> :
			<Template
				icon={<DollarCircleOutlined/>}
				status={"error"}
				label={"lab.liquid.create.no-puffies"}
			/>}
	</Loader>;
};
