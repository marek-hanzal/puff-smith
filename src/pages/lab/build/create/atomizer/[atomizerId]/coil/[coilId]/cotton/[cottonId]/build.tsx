import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch, IAtomizerFetchParams} from "@/puff-smith/service/atomizer/interface";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilFetch, ICoilFetchParams} from "@/puff-smith/service/coil/interface";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonFetch, ICottonFetchParams} from "@/puff-smith/service/cotton/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {CoilView} from "@/puff-smith/site/shared/coil/@module/view/CoilView";
import {CottonView} from "@/puff-smith/site/shared/cotton/@module/view/CottonView";
import {CreateDefaultForm} from "@/sdk/api/lab/build/create";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonLink, Centered, DatePicker, FormItem, ListIcon, Submit, SwitchItem, TabInline, Template} from "@leight-core/client";
import {merge} from "@leight-core/utils";
import {Col, InputNumber, message, Row, Tabs} from "antd";
import {GetServerSidePropsContext} from "next";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Build({atomizer, coil, cotton}: IAtomizerFetch & ICoilFetch & ICottonFetch) {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.create.build"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create/atomizer/[atomizerId]/coil/[coilId]", {
			atomizerId: atomizer.id,
			coilId: coil.id,
		})}
		icon={<BuildIcon/>}
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
			<BreadcrumbButton
				href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]"}
				query={{
					atomizerId: atomizer.id,
					coilId: coil.id,
				}}
				label={coil.name}
			/>
			<BreadcrumbIcon
				icon={<CottonIcon/>}
				label={cotton.name + " " + cotton.vendor.name}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.create.build",
		}}
	>
		<Row gutter={32}>
			<Col span={8}>
				<Tabs size={"large"}>
					<Tabs.TabPane key={"atomizer.preview"} tab={<TabInline icon={<AtomizerIcon/>} title={"lab.build.atomizer.preview.tab"}/>}>
						<AtomizerView atomizer={atomizer}/>
					</Tabs.TabPane>
					<Tabs.TabPane key={"coil.preview"} tab={<TabInline icon={<CoilIcon/>} title={"lab.build.coil.preview.tab"}/>}>
						<CoilView coil={coil}/>
					</Tabs.TabPane>
					<Tabs.TabPane key={"cotton.preview"} tab={<TabInline icon={<CottonIcon/>} title={"lab.build.cotton.preview.tab"}/>}>
						<CottonView cotton={cotton}/>
					</Tabs.TabPane>
				</Tabs>
			</Col>
			<Col span={16}>
				<Template span={10}>
					<CreateDefaultForm
						onSuccess={({navigate, response}) => {
							message.success(t("lab.build.create.success", response));
							navigate("/lab/build");
						}}
						translation={"lab.build.create"}
						toForm={() => ({
							archive: true,
						})}
						toMutation={values => ({
							...values,
							atomizerId: atomizer.id,
							coilId: coil.id,
							cottonId: cotton.id,
						})}
					>
						<FormItem field={"ohm"} required hasTooltip>
							<InputNumber
								autoFocus
								style={{width: "100%"}}
								min={0.05}
								max={4}
							/>
						</FormItem>
						<FormItem field={"created"} hasTooltip>
							<DatePicker/>
						</FormItem>
						<SwitchItem field={"archive"} hasTooltip/>
						<Centered>
							<Submit icon={<BuildIcon/>} label={"create"}/>
						</Centered>
					</CreateDefaultForm>
				</Template>
			</Col>
		</Row>
	</LabPage>;
});

export const getServerSideProps = async (context: GetServerSidePropsContext<IAtomizerFetchParams & ICoilFetchParams & ICottonFetchParams>) => merge<any, any>(
	merge<any, any>(
		await AtomizerSource().withFetch("atomizer", "atomizerId")(context),
		await CoilSource().withFetch("coil", "coilId")(context),
	),
	await CottonSource().withFetch("cotton", "cottonId")(context),
);