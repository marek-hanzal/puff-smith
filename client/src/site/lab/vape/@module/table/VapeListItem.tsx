import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {Divider, List, Space} from "antd";
import {VapePreviewButton, VapeQuickMenu} from "@/puff-smith/site/lab/vape";
import {durationOf} from "@leight-core/leight";
import {Ohm} from "@/puff-smith";

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
				icon={null}
				style={{padding: 0}}
				title={vape.build.atomizer.name}
				vape={vape}
			/>}
			description={<Space size={0} split={<Divider type={'vertical'}/>}>
				{vape.mixture.liquid.name}
				{vape.build.coil.wire.name}
				<Ohm ohm={vape.build.ohm}/>
				{vape.build.coil.size || '-'}
			</Space>}
		/>
		<span>{durationOf(vape.stamp).humanize()}</span>
	</List.Item>;
}
