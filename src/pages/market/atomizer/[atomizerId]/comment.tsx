import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch} from "@/puff-smith/service/atomizer/interface";
import {CommentList as AtomizerInventoryCommentList} from "@/puff-smith/site/inventory/atomizer/comment/@module/list/CommentList";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerIndexMenu} from "@/puff-smith/site/market/atomizer/@module/menu/AtomizerIndexMenu";
import {CommentCreateForm} from "@/puff-smith/site/shared/atomizer/comment/@module/form/CommentCreateForm";
import {CommentList as AtomizerCommentList} from "@/puff-smith/site/shared/atomizer/comment/@module/list/CommentList";
import {AtomizerCommentProviderControl} from "@/sdk/api/atomizer/comment/query";
import {AtomizerInventoryCommentProviderControl} from "@/sdk/api/inventory/atomizer/comment/query";
import {CommentOutlined, UserOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, EditIcon, TabInline, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {useState} from "react";

export default withMarketLayout(function Comment({atomizer}: IAtomizerFetch) {
	const [commentTab, setCommentTab] = useState<string>("list");
	return <MarketPage
		title={"market.atomizer.comment"}
		tabTitle={"market.atomizer.comment.title.tab"}
		values={{atomizer}}
		components={TransComponents}
		onBack={navigate => navigate("/market/atomizer")}
		menuSelection={["/market/atomizer", "/market/atomizer/[atomizerId]/comment"]}
		icon={<CommentOutlined/>}
		headerProps={{
			footer: <AtomizerIndexMenu atomizer={atomizer}/>,
		}}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/market/atomizer"}
				label={"market.atomizer.label"}
			/>
			<BreadcrumbButton
				href={"/market/atomizer/[atomizerId]"}
				query={{
					atomizerId: atomizer.id,
				}}
				label={`${atomizer.name} ${atomizer.vendor.name}`}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={"market.atomizer.comment.label"}
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
					<AtomizerCommentProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						applyFilter={{
							atomizerId: atomizer.id,
						}}
						defaultOrderBy={{
							comment: {created: "desc"},
						}}
					>
						<AtomizerCommentList
							locale={{
								emptyText: <Template
									icon={<CommentOutlined/>}
									label={"shared.comment.empty"}
									extra={<>
										<Divider/>
										<CommentCreateForm atomizer={atomizer}/>
									</>}
								/>,
							}}
						/>
					</AtomizerCommentProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"private-comments"} tab={<TabInline icon={<UserOutlined/>} title={"shared.comment.private.tab"}/>}>
					<AtomizerInventoryCommentProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						applyFilter={{
							atomizerInventory: {
								atomizerId: atomizer.id,
							},
						}}
						defaultOrderBy={{
							comment: {created: "desc"},
						}}
					>
						<AtomizerInventoryCommentList
							locale={{
								emptyText: <Template
									icon={<CommentOutlined/>}
									label={"shared.comment.private.empty"}
								/>,
							}}
						/>
					</AtomizerInventoryCommentProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"create"} tab={<TabInline icon={<EditIcon/>} title={"shared.comment.create.tab"}/>}>
					<CommentCreateForm
						atomizer={atomizer}
						onSuccess={() => {
							setCommentTab("list");
						}}
					/>
				</Tabs.TabPane>
			</Tabs>
		</Template>
	</MarketPage>;
});

export const getServerSideProps = AtomizerSource().withFetch("atomizer", "atomizerId");
