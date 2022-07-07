import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventoryFetch} from "@/puff-smith/service/aroma/inventory/interface";
import {BrowserInventoryPage} from "@/puff-smith/site/inventory/@module/component/BrowserInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/inventory/aroma/@module/menu/AromaIndexMenu";
import {CommentCreateForm} from "@/puff-smith/site/inventory/aroma/comment/@module/form/CommentCreateForm";
import {CommentList} from "@/puff-smith/site/inventory/aroma/comment/@module/list/CommentList";
import {AromaInventoryCommentProviderControl} from "@/sdk/api/inventory/aroma/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, EditIcon, TabInline, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {useState} from "react";

export default withInventoryLayout(function Comment({aromaInventory}: IAromaInventoryFetch) {
	const [commentTab, setCommentTab] = useState<string>("list");
	return <BrowserInventoryPage
		title={"inventory.aroma.comment"}
		tabTitle={"inventory.aroma.comment.title.tab"}
		values={{aromaInventory}}
		components={TransComponents}
		onBack={navigate => navigate("/inventory/aroma")}
		menuSelection={["/inventory/aroma", "/inventory/aroma/[aromaInventoryId]/comment"]}
		icon={<CommentOutlined/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/inventory"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/inventory/aroma"}
				label={"inventory.aroma.label"}
			/>
			<BreadcrumbButton
				href={"/inventory/aroma/[aromaInventory]"}
				query={{
					aromaInventory: aromaInventory.id,
				}}
				label={`${aromaInventory.aroma.name} ${aromaInventory.aroma.vendor.name}`}
			/>
			<BreadcrumbIcon
				icon={<AromaIcon/>}
				label={"inventory.aroma.comment.label"}
			/>
		</Breadcrumbs>}
		footer={<AromaIndexMenu aromaInventory={aromaInventory}/>}
	>
		<Template
			span={22}
		>
			<Tabs
				activeKey={commentTab}
				onChange={setCommentTab}
			>
				<Tabs.TabPane key={"list"} tab={<TabInline icon={<CommentOutlined/>} title={"shared.comment.list.tab"}/>}>
					<AromaInventoryCommentProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						applyFilter={{
							aromaInventoryId: aromaInventory.id,
						}}
						defaultOrderBy={{
							comment: {created: "desc"},
						}}
					>
						<CommentList
							emptyText={<Template
								icon={<CommentOutlined/>}
								label={"shared.comment.empty"}
								extra={<>
									<Divider/>
									<CommentCreateForm aromaInventory={aromaInventory}/>
								</>}
							/>}
						/>
					</AromaInventoryCommentProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"create"} tab={<TabInline icon={<EditIcon/>} title={"shared.comment.create.tab"}/>}>
					<CommentCreateForm
						aromaInventory={aromaInventory}
						onSuccess={() => {
							setCommentTab("list");
						}}
					/>
				</Tabs.TabPane>
			</Tabs>
		</Template>
	</BrowserInventoryPage>;
});

export const getServerSideProps = AromaInventorySource().withFetch("aromaInventory", "aromaInventoryId");
