import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch, IAtomizerFetchParams} from "@/puff-smith/service/atomizer/interface";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilFetch, ICoilFetchParams} from "@/puff-smith/service/coil/interface";
import {CottonInventoryList} from "@/puff-smith/site/inventory/cotton/@module/list/CottonInventoryList";
import {CottonListEmpty} from "@/puff-smith/site/inventory/cotton/@module/list/CottonListEmpty";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateLink} from "@/puff-smith/site/lab/build/@module/button/BuildCreateLink";
import {BuildRatingButton} from "@/puff-smith/site/lab/build/@module/button/BuildRatingButton";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {CoilView} from "@/puff-smith/site/shared/coil/@module/view/CoilView";
import {CottonCreateInline} from "@/puff-smith/site/shared/cotton/@module/form/CottonCreateInline";
import {CottonInventoryProviderControl, useCottonInventoryCountQuery} from "@/sdk/api/inventory/cotton/query";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {FireOutlined, MenuOutlined, StarOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, ButtonLink, DrawerButton, EditIcon, MobileContent, TabInline, Template, useIsMobile} from "@leight-core/client";
import {merge} from "@leight-core/utils";
import {Divider, Tabs} from "antd";
import {GetServerSidePropsContext} from "next";

export default withLabLayout(function Index({atomizer, coil}: IAtomizerFetch & ICoilFetch) {
	const cottonInventoryCountQuery = useCottonInventoryCountQuery();
	const isMobile = useIsMobile();
	return <BrowserLabPage
		title={"lab.build.create.cotton"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create/atomizer/[atomizerId]", {
			atomizerId: atomizer.id,
		})}
		icon={<CottonIcon/>}
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
								<CottonCreateInline
									size={"large"}
									type={"primary"}
									icon={<EditIcon/>}
									title={"lab.cotton.create.title"}
									label={"lab.cotton.create.button"}
									onSuccess={({navigate, response}) => {
										navigate("/lab/build/create/atomizer/[atomizerId]/coil/[coilId]/cotton/[cottonId]/build", {
											atomizerId: atomizer.id,
											coilId: coil.id,
											cottonId: response.id,
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
			<BreadcrumbButton
				href={"/lab/build/create/atomizer/[atomizerId]"}
				query={{
					atomizerId: atomizer.id,
				}}
				label={atomizer.name + " " + atomizer.vendor.name}
			/>
			<BreadcrumbIcon
				icon={<CoilIcon/>}
				label={coil.name}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.cotton",
		}}
	>
		{cottonInventoryCountQuery.data === 0 && <CottonListEmpty/>}
		{cottonInventoryCountQuery.isSuccess && cottonInventoryCountQuery.data > 0 && <Tabs size={isMobile ? "small" : "large"}>
			<Tabs.TabPane key={"recommended.favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"lab.build.atomizer.cotton.favorite.tab"}/>}>
				<CottonInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={[
						{cotton: {name: "asc"}},
					] as any}
					applyFilter={{
						rating: {
							gt: 0,
						}
					}}
				>
					<CottonInventoryList
						itemExtra={cotton => <ButtonLink
							href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]/cotton/[cottonId]/build"}
							query={{
								atomizerId: atomizer.id,
								coilId: coil.id,
								cottonId: cotton.id,
							}}
							icon={<CottonIcon/>}
							label={"lab.build.cotton.build.button"}
						/>}
						emptyText={<Template
							icon={<CottonIcon/>}
							label={"lab.build.cotton.list.empty"}
						/>}
					/>
				</CottonInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"recommended"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.atomizer.cotton.recommended.tab"}/>}>
				<CottonInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={[
						{cotton: {name: "asc"}},
					] as any}
					applyFilter={{
						cotton: {
							CottonDraw: {
								some: {
									drawId: {
										in: atomizer.drawIds,
									}
								}
							},
						}
					}}
				>
					<CottonInventoryList
						itemExtra={cotton => <ButtonLink
							href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]/cotton/[cottonId]/build"}
							query={{
								atomizerId: atomizer.id,
								coilId: coil.id,
								cottonId: cotton.id,
							}}
							icon={<CottonIcon/>}
							label={"lab.build.cotton.build.button"}
						/>}
						emptyText={<Template
							icon={<CottonIcon/>}
							label={"lab.build.cotton.list.empty"}
						/>}
					/>
				</CottonInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"cottons"} tab={<TabInline icon={<CottonIcon/>} title={"lab.build.atomizer.cotton.list.tab"}/>}>
				<CottonInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={[
						{cotton: {name: "asc"}},
					] as any}
				>
					<CottonInventoryList
						header={() => <RowInline
							extra={<CottonCreateInline
								size={"small"}
								type={"link"}
								icon={<EditIcon/>}
								title={"lab.cotton.create.title"}
								label={"lab.cotton.create.button"}
								onSuccess={({navigate, response}) => {
									navigate("/lab/build/create/atomizer/[atomizerId]/coil/[coilId]/cotton/[cottonId]/build", {
										atomizerId: atomizer.id,
										coilId: coil.id,
										cottonId: response.id,
									});
								}}
							/>}
						/>}
						itemExtra={cotton => <ButtonLink
							href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]/cotton/[cottonId]/build"}
							query={{
								atomizerId: atomizer.id,
								coilId: coil.id,
								cottonId: cotton.id,
							}}
							icon={<CottonIcon/>}
							label={"lab.build.cotton.build.button"}
						/>}
					/>
				</CottonInventoryProviderControl>
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
								coilId: coil.id,
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
					<Tabs.TabPane key={"builds.coil"} tab={<TabInline icon={<CoilIcon/>} title={"lab.build.atomizer.coil.builds.coil.tab"}/>}>
						<BuildProviderControl
							defaultSize={DEFAULT_LIST_SIZE}
							defaultOrderBy={{
								created: "desc",
							}}
							applyFilter={{
								atomizerId: atomizer.id,
								coilId: coil.id,
							}}
						>
							<BuildList
								emptyText={<Template
									icon={<BuildIcon/>}
									label={"lab.build.create.build.coil.list.empty"}
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
			<Tabs.TabPane key={"coil.preview"} tab={<TabInline icon={<CoilIcon/>} title={"lab.build.coil.preview.tab"}/>}>
				<CoilView coil={coil}/>
			</Tabs.TabPane>
		</Tabs>}
	</BrowserLabPage>;
});

export const getServerSideProps = async (context: GetServerSidePropsContext<IAtomizerFetchParams & ICoilFetchParams>) => merge<any, any>(
	await AtomizerSource().withFetch("atomizer", "atomizerId")(context),
	await CoilSource().withFetch("coil", "coilId")(context)
);
