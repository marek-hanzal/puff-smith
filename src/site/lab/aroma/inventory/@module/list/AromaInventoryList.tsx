import {PgVgInline, Tags} from "@/puff-smith";
import {IAromaInventory} from "@/puff-smith/service/aroma";
import {AromaListEmpty} from "@/puff-smith/site/lab/aroma/inventory";
import {AromaContentInline, AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {AromasInventoryListSource, IAromasInventoryListSourceProps} from "@/sdk/api/aroma/inventory/query";
import {MinusCircleTwoTone} from "@ant-design/icons";
import {BoolInline, ListItem, ListItemMeta, useOptionalDrawerContext, useOptionalFormItemContext, useOptionalSelectionContext} from "@leight-core/client";
import {Button, Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = props => {
	const {t} = useTranslation();
	const selectionContext = useOptionalSelectionContext<IAromaInventory>();
	const formItemContext = useOptionalFormItemContext();
	const drawerContext = useOptionalDrawerContext();
	return <AromasInventoryListSource
		locale={{
			emptyText: <AromaListEmpty/>,
		}}
		footer={selectionContext ? () => <Button
			type={"primary"}
			disabled={selectionContext.isEmpty()}
			onClick={() => {
				formItemContext?.setValue(selectionContext?.toSingle().aromaId);
				drawerContext?.setVisible(false);
			}}
		>
			{t("common.selection.ok.label")}
		</Button> : () => null}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
			onClick={selectionContext ? () => selectionContext?.onSelectItem(aromaInventory) : () => null}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{selectionContext && <BoolInline bool={selectionContext.isSelectedItem(aromaInventory)} uncheckIcon={<MinusCircleTwoTone/>}/>}
					<AromaNameInline aroma={aromaInventory.aroma}/>
					<PgVgInline pgvg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					<Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
