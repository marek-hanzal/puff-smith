import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch} from "@/puff-smith/service/atomizer/interface";
import {CoilFilter} from "@/puff-smith/site/inventory/coil/@module/filter/CoilFilter";
import {CoilInventoryList} from "@/puff-smith/site/inventory/coil/@module/list/CoilInventoryList";
import {WireListEmpty} from "@/puff-smith/site/inventory/wire/@module/list/WireListEmpty";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateLink} from "@/puff-smith/site/lab/build/@module/button/BuildCreateLink";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {CoilCreateForm} from "@/puff-smith/site/lab/coil/@module/form/CoilCreateForm";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {CoilInventoryProviderControl} from "@/sdk/api/inventory/coil/query";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {FireOutlined, StarOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, ButtonLink, DrawerButton, EditIcon, ListIcon, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withLabLayout(function Index({atomizer}: IAtomizerFetch) {
	return <LabPage
		title={"lab.build.create.coil"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create")}
		icon={<AtomizerIcon/>}
		extra={<ButtonBar>
			<ButtonLink
				href={"/lab/build"}
				icon={<ListIcon/>}
				label={"lab.build.index.button"}
			/>
			<DrawerButton
				size={"large"}
				type={"primary"}
				icon={<EditIcon/>}
				title={"lab.coil.create.title"}
				label={"lab.coil.create.button"}
			>
				<CoilCreateForm/>
			</DrawerButton>
		</ButtonBar>}
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
				href={"/lab/build/create"}
				label={"lab.build.create.label"}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={<AtomizerNameInline atomizer={atomizer}/>}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.atomizer",
		}}
	>
		<Tabs size={"large"}>
			<Tabs.TabPane key={"recommended"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.atomizer.coil.recommended.tab"}/>}>
				<CoilInventoryProviderControl
					defaultSize={5}
					defaultOrderBy={[
						{name: "asc"},
						{wraps: "desc"},
						{size: "asc"},
					] as any}
					applyFilter={{
						AND: [
							{
								size: {
									gte: atomizer.coilMin || undefined,
								},
							},
							{
								size: {
									lte: atomizer.coilMax || undefined,
								},
							},
							{
								wraps: {
									gte: atomizer.wrapsMin || undefined,
								},
							},
							{
								wraps: {
									lte: atomizer.wrapsMax || undefined,
								},
							},
						],
						CoilDraw: {
							some: {
								drawId: {
									in: atomizer.drawIds,
								}
							}
						},
					}}
				>
					<CoilInventoryList
						header={() => <RowInline>
							<CoilFilter/>
						</RowInline>}
						itemExtra={coil => <ButtonLink
							href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]"}
							query={{
								atomizerId: atomizer.id,
								coilId: coil.id,
							}}
							icon={<CoilIcon/>}
							label={"lab.build.coil.build.button"}
						/>}
						locale={{
							emptyText: <Template
								icon={<WireIcon/>}
								label={"lab.build.wire.list.empty"}
							/>
						}}
					/>
				</CoilInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"coils"} tab={<TabInline icon={<CoilIcon/>} title={"lab.build.atomizer.coil.coils.tab"}/>}>
				<CoilInventoryProviderControl
					defaultSize={5}
					defaultOrderBy={[
						{name: "asc"},
						{size: "desc"},
						{wraps: "asc"},
					] as any}
				>
					<CoilInventoryList
						header={() => <RowInline>
							<CoilFilter/>
						</RowInline>}
						itemExtra={coil => <ButtonLink
							href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]"}
							query={{
								atomizerId: atomizer.id,
								coilId: coil.id,
							}}
							icon={<CoilIcon/>}
							label={"lab.build.coil.build.button"}
						/>}
						locale={{
							emptyText: <WireListEmpty/>,
						}}
					/>
				</CoilInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"favourites"} tab={<TabInline icon={<StarOutlined/>} title={"lab.build.atomizer.coil.favourites.tab"}/>}>
				<BuildProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={{
						created: "desc",
					}}
					applyFilter={{
						atomizerId: atomizer.id,
						rating: {
							gt: 0,
						},
					}}
				>
					<BuildList
						locale={{
							emptyText: <Template
								icon={<BuildIcon/>}
								label={"lab.build.create.atomizer.list.empty"}
							/>,
						}}
						itemExtra={build => <BuildCreateLink
							atomizer={build.atomizer}
							coil={build.coil}
							cotton={build.cotton}
						/>}
					/>
				</BuildProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"atomizer.preview"} tab={<TabInline icon={<AtomizerIcon/>} title={"lab.build.atomizer.preview.tab"}/>}>
				<AtomizerView atomizer={atomizer}/>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});

export const getServerSideProps = AtomizerSource().withFetch("atomizer", "atomizerId");
