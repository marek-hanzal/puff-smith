import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch, IAtomizerFetchParams} from "@/puff-smith/service/atomizer/interface";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilFetch, ICoilFetchParams} from "@/puff-smith/service/coil/interface";
import {CottonInventoryList} from "@/puff-smith/site/inventory/cotton/@module/list/CottonInventoryList";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {CottonInventoryProviderControl} from "@/sdk/api/inventory/cotton/query";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {FireOutlined, StarOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonLink, ListIcon, TabInline} from "@leight-core/client";
import {merge} from "@leight-core/utils";
import {Col, Row, Tabs} from "antd";
import {GetServerSidePropsContext} from "next";

export default withLabLayout(function Index({atomizer, coil}: IAtomizerFetch & ICoilFetch) {
	return <LabPage
		title={"lab.build.create.cotton"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create/atomizer/[atomizerId]", {
			atomizerId: atomizer.id,
		})}
		icon={<CottonIcon/>}
		extra={<ButtonLink
			href={"/lab/build"}
			icon={<ListIcon/>}
			label={"lab.build.index.button"}
		/>}
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
		<Row gutter={32}>
			<Col span={18}>
				<Tabs size={"large"}>
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
							<CottonInventoryList/>
						</CottonInventoryProviderControl>
					</Tabs.TabPane>
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
							<BuildList/>
						</BuildProviderControl>
					</Tabs.TabPane>
				</Tabs>
			</Col>
			<Col span={6}>
				<AtomizerView atomizer={atomizer}/>
			</Col>
		</Row>
	</LabPage>;
});

export const getServerSideProps = async (context: GetServerSidePropsContext<IAtomizerFetchParams & ICoilFetchParams>) => merge<any, any>(
	await AtomizerSource().withFetch("atomizer", "atomizerId")(context),
	await CoilSource().withFetch("coil", "coilId")(context)
);
