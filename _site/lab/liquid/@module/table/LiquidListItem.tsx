import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {List} from "antd";
import {LiquidQuickMenu} from "../component/LiquidQuickMenu";
import {LiquidPreviewButton} from "../component/button/LiquidPreviewButton";

export interface ILiquidListItemProps extends Partial<ListItemProps> {
	liquid: LiquidDto;
}

export const LiquidListItem: FC<ILiquidListItemProps> = ({liquid, ...props}) => {
	return <List.Item
		actions={[<LiquidQuickMenu key={'quick-menu'} liquid={liquid}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<LiquidPreviewButton
				icon={null}
				style={{padding: 0}}
				title={liquid.name}
				liquid={liquid}
				liquidPreviewProps={{
					hidden: ['upload', 'images']
				}}
			/>}
			description={liquid.vendor.name}
		/>
	</List.Item>;
}
