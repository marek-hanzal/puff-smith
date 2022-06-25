import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {IMixtureInfo} from "@/puff-smith/service/mixture/utils";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureUserJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureUserJobButton";
import {MixtureInfoForm} from "@/puff-smith/site/shared/mixture/@module/form/MixtureInfoForm";
import {MixtureInfoView} from "@/puff-smith/site/shared/mixture/@module/view/MixtureInfoView";
import {MixtureInventoryProviderControl} from "@/sdk/api/inventory/mixture/query";
import {CalculatorOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, TabInline, Template, useFilterContext, useIsMobile} from "@leight-core/client";
import {Col, Row, Tabs} from "antd";
import {FC, useState} from "react";

interface IInternalListProps {
}

const InternalList: FC<IInternalListProps> = () => {
	const filterContext = useFilterContext();
	const isMobile = useIsMobile();
	return filterContext.isEmpty() ?
		<Template span={22}>
			<Row gutter={32}>
				<Col span={isMobile ? 24 : 12}>
					<MixtureFilter
						inline
					/>
				</Col>
				<Col span={isMobile ? 24 : 12}>
					<Template
						style={{marginTop: "0em"}}
						icon={<MixtureIcon/>}
						label={"market.aroma.mixture.filter"}
						span={12}
						extra={<MixtureUserJobButton/>}
					/>
				</Col>
			</Row>
		</Template> :
		<MixtureList
			header={() => <RowInline
				extra={<MixtureUserJobButton/>}
			>
				<MixtureFilter/>
			</RowInline>}
		/>;
};

export default withLabLayout(function Index() {
	const [info, setInfo] = useState<IMixtureInfo>();
	const isMobile = useIsMobile();
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbIcon
				icon={<MixtureIcon/>}
				label={"lab.mixture.label"}
			/>
		</Breadcrumbs>}
	>
		<Tabs size={isMobile ? "small" : "large"} destroyInactiveTabPane onChange={() => setInfo(undefined)}>
			<Tabs.TabPane key={"search"} tab={<TabInline icon={<MixtureIcon/>} title={"lab.mixture.search.tab"}/>}>
				<MixtureInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					defaultOrderBy={[
						{aroma: {name: "asc"}},
						{vg: "desc"},
						{nicotine: "asc"},
					] as any}
					defaultFilter={{
						nicotineToRound: 0,
					}}
					defaultSource={{
						nicotineToRound: 0,
					}}
				>
					<InternalList/>
				</MixtureInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"calculator"} tab={<TabInline icon={<CalculatorOutlined/>} title={"lab.mixture.calculator.tab"}/>}>
				<Template span={22}>
					<Row gutter={32}>
						<Col span={isMobile ? 24 : 12}>
							<MixtureInfoForm
								onSuccess={({response}) => setInfo(response)}
							/>
						</Col>
						<Col span={isMobile ? 24 : 12}>
							{info ? <MixtureInfoView info={info}/> : <Template
								style={{marginTop: "0em"}}
								icon={<CalculatorOutlined/>}
								label={"lab.mixture.calculator.tab"}
								span={12}
							/>}
						</Col>
					</Row>
				</Template>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
