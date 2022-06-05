import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {Tags} from "@/puff-smith/component/Tags";
import {ICoil} from "@/puff-smith/service/coil/interface";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {CoilInventoryListSource, ICoilInventoryListSourceProps} from "@/sdk/api/inventory/coil/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC, ReactNode} from "react";

export interface ICoilInventoryListProps extends Partial<ICoilInventoryListSourceProps> {
	itemExtra?(coil: ICoil): ReactNode;
}

export const CoilInventoryList: FC<ICoilInventoryListProps> = ({itemExtra, ...props}) => {
	return <CoilInventoryListSource
		{...props}
	>
		{coil => <ListItem
			key={coil.id}
			extra={itemExtra?.(coil)}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>} size={0}>
					<WireNameInline wire={coil.wire}/>
					<CoilSize size={coil.size}/>
					<CoilWraps wraps={coil.wraps}/>
					<Tags tags={coil.wire.draws} translation={"common.draw"}/>
				</Space>}
			/>
		</ListItem>}
	</CoilInventoryListSource>;
};
