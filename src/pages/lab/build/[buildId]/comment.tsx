import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {CommentCreateForm} from "@/puff-smith/site/lab/build/comment/@module/form/CommentCreateForm";
import {CommentList} from "@/puff-smith/site/lab/build/comment/@module/list/CommentList";
import {BuildCommentProviderControl} from "@/sdk/api/lab/build/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, EditIcon, TabInline, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {useState} from "react";

export default withLabLayout(function Comment({build}: IBuildFetch) {
	const [commentTab, setCommentTab] = useState<string>("list");
	return <BrowserLabPage
		title={"lab.build.comment"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/comment"]}
		icon={<CommentOutlined/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbButton
				href={"/lab/build/[buildId]"}
				query={{
					buildId: build.id,
				}}
				label={<BuildNameInline build={build}/>}
			/>
			<BreadcrumbIcon
				icon={<CommentOutlined/>}
				label={"lab.build.comment.title"}
			/>
		</Breadcrumbs>}
		footer={<BuildIndexMenu build={build}/>}
	>
		<Template
			span={22}
		>
			<Tabs
				activeKey={commentTab}
				onChange={setCommentTab}
			>
				<Tabs.TabPane key={"list"} tab={<TabInline icon={<CommentOutlined/>} title={"shared.comment.list.tab"}/>}>
					<BuildCommentProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						applyFilter={{
							buildId: build.id,
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
									<CommentCreateForm build={build}/>
								</>}
							/>}
						/>
					</BuildCommentProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"create"} tab={<TabInline icon={<EditIcon/>} title={"shared.comment.create.tab"}/>}>
					<CommentCreateForm
						build={build}
						onSuccess={() => {
							setCommentTab("list");
						}}
					/>
				</Tabs.TabPane>
			</Tabs>
		</Template>
	</BrowserLabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");
