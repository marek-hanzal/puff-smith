import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid";
import {useAromasInventoryQuery} from "@/sdk/api/aroma/inventory/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ILiquidListEmptyProps {
}

export const LiquidListEmpty: FC<ILiquidListEmptyProps> = () => {
	const aromasInventoryQuery = useAromasInventoryQuery();
	if (aromasInventoryQuery.isSuccess && !aromasInventoryQuery.data.count) {
		return <Template
			icon={<LiquidIcon/>}
			label={"lab.aroma.list.empty"}
			status={"warning"}
			extra={<>
				<Divider/>
				<ButtonLink
					size={"large"}
					type={"primary"}
					ghost
					icon={<LiquidIcon/>}
					href={"/market/aroma"}
					title={"lab.aroma.purchase.button"}
				/>
			</>}
		/>;
	}

	return <Template
		icon={<LiquidIcon/>}
		label={"lab.liquid.list.empty"}
		extra={<>
			<Divider/>
			<LiquidCreateButton/>
		</>}
	/>;
};
