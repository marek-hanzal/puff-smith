import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {List} from "antd";
import {VapePreviewButton, VapeQuickMenu} from "@/puff-smith/site/lab/vape";
import {durationOf, toLocalDate} from "@leight-core/leight/dist";

export interface IVapeListItemProps extends Partial<ListItemProps> {
	vape: VapeDto;
}

export const VapeListItem: FC<IVapeListItemProps> = ({vape, ...props}) => {
	return <List.Item
		actions={[<VapeQuickMenu key={'quick-menu'} vape={vape}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<VapePreviewButton
				style={{padding: 0}}
				title={vape.build.atomizer.name}
				vape={vape}
			/>}
			description={vape.mixture.liquid.name}
		/>
		<span>{toLocalDate(vape.stamp) + ' (' + durationOf(vape.stamp).humanize() + ')'}</span>
	</List.Item>;
}
