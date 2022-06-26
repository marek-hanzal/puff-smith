import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {SizeMm} from "@/puff-smith/component/inline/SizeMm";
import {Tags} from "@/puff-smith/component/Tags";
import {ICoil} from "@/puff-smith/service/coil/interface";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {CoilInventoryListSource, ICoilInventoryListSourceProps} from "@/sdk/api/inventory/coil/query";
import {BrowserContent, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
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
			<BrowserContent>
				<ListItemMeta
					title={<Space split={<Divider type={"vertical"}/>} size={0}>
						<WireNameInline wire={coil.wire}/>
						<CoilSize size={coil.size}/>
						<CoilWraps wraps={coil.wraps}/>
						<SizeMm size={coil.wire.mmToRound}/>
						{coil.wire.draws.length > 0 && <Tags tags={coil.wire.draws} translation={"common.draw"}/>}
					</Space>}
					description={<Space split={<Divider type={"vertical"}/>}>
						<Typography.Text type={"secondary"}>{coil.name}</Typography.Text>
						<WireFiberInline wire={coil.wire}/>
					</Space>}
				/>
			</BrowserContent>
			<MobileContent>
				<ListItemMeta
					title={<Space split={<Divider type={"vertical"}/>} size={0}>
						<WireNameInline wire={coil.wire}/>
					</Space>}
					description={<Space direction={"vertical"}>
						<Typography.Text type={"secondary"}>{coil.name}</Typography.Text>
						<WireFiberInline wire={coil.wire}/>
					</Space>}
				/>
			</MobileContent>
		</ListItem>}
	</CoilInventoryListSource>;
};
