import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch} from "@/puff-smith/service/atomizer/interface";
import {CoilFilter} from "@/puff-smith/site/inventory/coil/@module/filter/CoilFilter";
import {CoilInventoryList} from "@/puff-smith/site/inventory/coil/@module/list/CoilInventoryList";
import {WireListEmpty} from "@/puff-smith/site/inventory/wire/@module/list/WireListEmpty";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateLink} from "@/puff-smith/site/lab/build/@module/button/BuildCreateLink";
import {BuildRatingButton} from "@/puff-smith/site/lab/build/@module/button/BuildRatingButton";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {CoilCreateInline} from "@/puff-smith/site/shared/coil/@module/button/CoilCreateInline";
import {CoilInventoryProviderControl} from "@/sdk/api/inventory/coil/query";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {FireOutlined, MenuOutlined, StarOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, ButtonLink, DrawerButton, EditIcon, MobileContent, TabInline, Template, useIsMobile} from "@leight-core/client";
import {Divider, Tabs} from "antd";

export default withLabLayout(function Index({atomizer}: IAtomizerFetch) {
	const isMobile = useIsMobile();
	return <BrowserLabPage
		title={"lab.build.create.coil"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create")}
		icon={<AtomizerIcon/>}
		extra={<>
			<MobileContent>
				<DrawerButton
					type={"text"}
					size={"large"}
					icon={<MenuOutlined/>}
					title={"lab.build.create.context.menu.title"}
				>
					<Template
						forceIcon
						icon={<BuildIcon/>}
						extra={<>
							<Divider/>
							<ButtonBar direction={"vertical"} size={8}>
								<CoilCreateInline
									size={"large"}
									type={"primary"}
									icon={<EditIcon/>}
									title={"lab.coil.create.title"}
									label={"lab.coil.create.button"}
									onSuccess={({navigate, response}) => {
										navigate("/lab/build/create/atomizer/[atomizerId]/coil/[coilId]", {
											atomizerId: atomizer.id,
											coilId: response.id,
										});
									}}
								/>
							</ButtonBar>
						</>}
					/>
				</DrawerButton>
			</MobileContent>
		</>}
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
		<Tabs size={isMobile ? "small" : "large"}>
			<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"lab.build.atomizer.coil.favorite.tab"}/>}>
				<CoilInventoryProviderControl
					defaultSize={5}
					defaultOrderBy={[
						{name: "asc"},
						{size: "desc"},
						{wraps: "asc"},
					] as any}
					applyFilter={{
						wire: {
							WireInventory: {
								some: {
									rating: {
										gt: 0,
									},
								},
							},
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
						emptyText={<WireListEmpty/>}
					/>
				</CoilInventoryProviderControl>
			</Tabs.TabPane>
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
						emptyText={<Template
							icon={<WireIcon/>}
							label={"lab.build.wire.list.empty"}
						/>}
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
						header={() => <RowInline
							extra={<CoilCreateInline
								size={"small"}
								type={"link"}
								icon={<EditIcon/>}
								title={"lab.coil.create.title"}
								label={"lab.coil.create.button"}
								onSuccess={({navigate, response}) => {
									navigate("/lab/build/create/atomizer/[atomizerId]/coil/[coilId]", {
										atomizerId: atomizer.id,
										coilId: response.id,
									});
								}}
							/>}
						>
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
						emptyText={<WireListEmpty/>}
					/>
				</CoilInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"builds"} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.atomizer.coil.builds.tab"}/>}>
				<Tabs>
					<Tabs.TabPane key={"favourites"} tab={<TabInline icon={<StarOutlined/>} title={"lab.build.atomizer.cotton.favourites.tab"}/>}>
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
								emptyText={<Template
									icon={<BuildIcon/>}
									label={"lab.build.create.coil.list.empty"}
								/>}
								itemExtra={build => <>
									<BuildRatingButton disabled build={build}/>
									<BuildCreateLink
										atomizer={build.atomizer}
										coil={build.coil}
										cotton={build.cotton}
									/>
								</>}
							/>
						</BuildProviderControl>
					</Tabs.TabPane>
					<Tabs.TabPane key={"all"} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.atomizer.coil.builds.tab"}/>}>
						<BuildProviderControl
							defaultSize={DEFAULT_LIST_SIZE}
							defaultOrderBy={{
								created: "desc",
							}}
							applyFilter={{
								atomizerId: atomizer.id,
							}}
						>
							<BuildList
								emptyText={<Template
									icon={<BuildIcon/>}
									label={"lab.build.create.atomizer.build.list.empty"}
								/>}
								itemExtra={build => <>
									<BuildRatingButton disabled build={build}/>
									<BuildCreateLink
										atomizer={build.atomizer}
										coil={build.coil}
										cotton={build.cotton}
									/>
								</>}
							/>
						</BuildProviderControl>
					</Tabs.TabPane>
				</Tabs>
			</Tabs.TabPane>
			<Tabs.TabPane key={"atomizer.preview"} tab={<TabInline icon={<AtomizerIcon/>} title={"lab.build.atomizer.preview.tab"}/>}>
				<AtomizerView atomizer={atomizer}/>
			</Tabs.TabPane>
		</Tabs>
	</BrowserLabPage>;
});

export const getServerSideProps = AtomizerSource().withFetch("atomizer", "atomizerId");
