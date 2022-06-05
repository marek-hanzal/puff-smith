import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch} from "@/puff-smith/service/atomizer/interface";
import {CoilInventoryList} from "@/puff-smith/site/inventory/coil/@module/list/CoilInventoryList";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {CoilInventoryProviderControl} from "@/sdk/api/inventory/coil/query";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {FireOutlined, StarOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonLink, ListIcon, TabInline} from "@leight-core/client";
import {Col, Row, Tabs} from "antd";

export default withLabLayout(function Index({atomizer}: IAtomizerFetch) {
	return <LabPage
		title={"lab.build.create.coil"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create")}
		icon={<AtomizerIcon/>}
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
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={<AtomizerNameInline atomizer={atomizer}/>}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.atomizer",
		}}
	>
		<Row gutter={32}>
			<Col span={18}>
				<Tabs size={"large"}>
					<Tabs.TabPane key={"recommended"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.atomizer.coil.recommended.tab"}/>}>
						<CoilInventoryProviderControl
							defaultSize={DEFAULT_LIST_SIZE}
							defaultOrderBy={[
								{name: "asc"},
								{size: "desc"},
								{wraps: "asc"},
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
								itemExtra={coil => <ButtonLink
									href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]"}
									query={{
										atomizerId: atomizer.id,
										coilId: coil.id,
									}}
									icon={<CoilIcon/>}
									label={"lab.build.coil.build.button"}
								/>}
							/>
						</CoilInventoryProviderControl>
					</Tabs.TabPane>
					<Tabs.TabPane key={"coils"} tab={<TabInline icon={<CoilIcon/>} title={"lab.build.atomizer.coil.coils.tab"}/>}>
						<CoilInventoryProviderControl
							defaultSize={DEFAULT_LIST_SIZE}
							defaultOrderBy={[
								{name: "asc"},
								{size: "desc"},
								{wraps: "asc"},
							] as any}
						>
							<CoilInventoryList/>
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

export const getServerSideProps = AtomizerSource().withFetch("atomizer", "atomizerId");
