import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {CommentList as AromaInventoryCommentList} from "@/puff-smith/site/inventory/aroma/comment/@module/list/CommentList";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {CommentCreateForm} from "@/puff-smith/site/shared/aroma/comment/@module/form/CommentCreateForm";
import {CommentList as AromaCommentList} from "@/puff-smith/site/shared/aroma/comment/@module/list/CommentList";
import {AromaCommentProviderControl} from "@/sdk/api/aroma/comment/query";
import {AromaInventoryCommentProviderControl} from "@/sdk/api/inventory/aroma/comment/query";
import {CommentOutlined, UserOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, EditIcon, TabInline, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {useState} from "react";

export default withMarketLayout(function Comment({aroma}: IAromaFetch) {
	const [commentTab, setCommentTab] = useState<string>("list");
	return <MarketPage
		title={"market.aroma.comment"}
		tabTitle={"market.aroma.comment.title.tab"}
		values={{aroma}}
		components={TransComponents}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]/comment"]}
		icon={<CommentOutlined/>}
		headerProps={{
			footer: <AromaIndexMenu aroma={aroma}/>,
		}}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/market/aroma"}
				label={"market.aroma.label"}
			/>
			<BreadcrumbButton
				href={"/market/aroma/[aromaId]"}
				query={{
					aromaId: aroma.id,
				}}
				label={`${aroma.name} ${aroma.vendor.name}`}
			/>
			<BreadcrumbIcon
				icon={<AromaIcon/>}
				label={"market.aroma.comment.label"}
			/>
		</Breadcrumbs>}
	>
		<Template
			span={22}
		>
			<Tabs
				activeKey={commentTab}
				onChange={setCommentTab}
			>
				<Tabs.TabPane key={"list"} tab={<TabInline icon={<CommentOutlined/>} title={"shared.comment.list.tab"}/>}>
					<AromaCommentProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						applyFilter={{
							aromaId: aroma.id,
						}}
						defaultOrderBy={{
							comment: {created: "desc"},
						}}
					>
						<AromaCommentList
							locale={{
								emptyText: <Template
									icon={<CommentOutlined/>}
									label={"shared.comment.empty"}
									extra={<>
										<Divider/>
										<CommentCreateForm aroma={aroma}/>
									</>}
								/>,
							}}
						/>
					</AromaCommentProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"private-comments"} tab={<TabInline icon={<UserOutlined/>} title={"shared.comment.private.tab"}/>}>
					<AromaInventoryCommentProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						applyFilter={{
							aromaInventory: {
								aromaId: aroma.id,
							},
						}}
						defaultOrderBy={{
							comment: {created: "desc"},
						}}
					>
						<AromaInventoryCommentList
							locale={{
								emptyText: <Template
									icon={<CommentOutlined/>}
									label={"shared.comment.private.empty"}
								/>,
							}}
						/>
					</AromaInventoryCommentProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"create"} tab={<TabInline icon={<EditIcon/>} title={"shared.comment.create.tab"}/>}>
					<CommentCreateForm
						aroma={aroma}
						onSuccess={() => {
							setCommentTab("list");
						}}
					/>
				</Tabs.TabPane>
			</Tabs>
		</Template>
	</MarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
