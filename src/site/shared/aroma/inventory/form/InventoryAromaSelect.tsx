import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma";
import {IInventoryAromasSourceSelectProps, InventoryAromasFilterProvider, InventoryAromasOrderByProvider, InventoryAromasSourceControlProvider, InventoryAromasSourceSelect} from "@/sdk/api/aroma/inventory/aroma/query";
import {DrawerButton, MenuIcon, SelectionProvider} from "@leight-core/client";
import {Col, Input, Row} from "antd";
import {FC} from "react";

export interface IInventoryAromaSelectProps extends Partial<IInventoryAromasSourceSelectProps> {
}

export const InventoryAromaSelect: FC<IInventoryAromaSelectProps> = props => {
	return <InventoryAromasFilterProvider>
		<InventoryAromasOrderByProvider>
			<Input.Group>
				<Row gutter={8}>
					<Col flex={"auto"}>
						<InventoryAromasSourceSelect
							showSearch
							allowClear
							style={{width: "100%"}}
							toOption={aroma => ({
								label: <AromaNameInline aroma={aroma}/>,
								value: aroma.id,
							})}
							{...props}
						/>
					</Col>
					<Col span={2}>
						<DrawerButton
							type={"link"}
							icon={<MenuIcon/>}
							title={"lab.aroma.select.title"}
							tooltip={"lab.aroma.select.title.tooltip"}
							width={800}
						>
							<InventoryAromasSourceControlProvider>
								<SelectionProvider type={"single"}>
									<AromaInventoryList/>
								</SelectionProvider>
							</InventoryAromasSourceControlProvider>
						</DrawerButton>
					</Col>
				</Row>
			</Input.Group>
		</InventoryAromasOrderByProvider>
	</InventoryAromasFilterProvider>;
};
