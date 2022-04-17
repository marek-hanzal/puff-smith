import {PgVgInline, Tags} from "@/puff-smith";
import {IAromaInventory} from "@/puff-smith/service/aroma";
import {AromaListEmpty} from "@/puff-smith/site/lab/aroma/inventory";
import {AromaContentInline, AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {AromasInventoryListSource, IAromasInventoryListSourceProps} from "@/sdk/api/aroma/inventory/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Button, Divider, Space} from "antd";
import {FC, useState} from "react";

export type ISelectType = "none" | "single" | "multi";
export type IBoolType = "true/false" | "true/false/undefined" | "true/undefined";

export interface IAromaInventoryListProps extends Partial<IAromasInventoryListSourceProps> {
	selectType?: ISelectType;
	boolType?: IBoolType;
}

export const AromaInventoryList: FC<IAromaInventoryListProps> = ({selectType = "none", boolType = "true/undefined", ...props}) => {
	const [selection, setSelection] = useState<{ [index in string]: boolean | undefined }>({});
	const isSelectable = selectType !== "none";

	const onSelect = (aromaInventory: IAromaInventory) => {
		let map: any = {};
		switch (boolType) {
			case "true/false":
				map = {"true": false, "false": true, "undefined": true};
				break;
			case "true/undefined":
				map = {"true": undefined, "undefined": true};
				break;
			case "true/false/undefined":
				map = {"undefined": true, "true": false, "false": undefined};
				break;
		}
		switch (selectType) {
			case "single":
				setSelection(selection => ({[aromaInventory.id]: map[`${selection[aromaInventory.id]}`]}));
				break;
			case "multi":
				setSelection(selection => {
					return ({...selection, [aromaInventory.id]: map[`${selection[aromaInventory.id]}`]});
				});
				break;
		}
	};

	return <AromasInventoryListSource
		locale={{
			emptyText: <AromaListEmpty/>,
		}}
		footer={isSelectable ? () => <Button onClick={() => console.log("Selection", Object.keys(selection).filter(key => !!selection[key]))}>click me</Button> : () => null}
		{...props}
	>
		{aromaInventory => <ListItem
			key={aromaInventory.id}
			onClick={isSelectable ? (() => onSelect(aromaInventory)) : () => null}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					{isSelectable && <BoolInline bool={selection[aromaInventory.id]}/>}
					<AromaNameInline aroma={aromaInventory.aroma}/>
					<PgVgInline pgvg={aromaInventory.aroma}/>
					<AromaContentInline aroma={aromaInventory.aroma}/>
					<Tags color={"magenta"} tags={aromaInventory.aroma.tastes} translation={"common.taste"}/>
				</Space>}
			/>
		</ListItem>}
	</AromasInventoryListSource>;
};
