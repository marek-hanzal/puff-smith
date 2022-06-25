import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAroma, IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {MixtureList} from "@/puff-smith/site/market/mixture/@module/list/MixtureList";
import {MixtureListEmpty} from "@/puff-smith/site/market/mixture/@module/list/MixtureListEmpty";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureJobButton";
import {MixtureFilter} from "@/puff-smith/site/shared/mixture/@module/filter/MixtureFilter";
import {MixtureProviderControl} from "@/sdk/api/mixture/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template, useFilterContext} from "@leight-core/client";
import {Col, Row, Space} from "antd";
import {FC} from "react";

interface IInternalListProps {
	aroma: IAroma;
}

const InternalList: FC<IInternalListProps> = ({aroma}) => {
	const filterContext = useFilterContext();
	return filterContext.isEmpty() ?
		<Template span={22}>
			<Row gutter={32}>
				<Col span={12}>
					<MixtureFilter
						inline
						aroma={aroma}
					/>
				</Col>
				<Col span={12}>
					<Template
						style={{marginTop: "0em"}}
						icon={<MixtureIcon/>}
						label={"market.aroma.mixture.filter"}
						span={12}
						extra={<MixtureJobButton aroma={aroma}/>}
					/>
				</Col>
			</Row>
		</Template> :
		<MixtureList
			header={() => <RowInline
				extra={<MixtureJobButton aroma={aroma}/>}
			>
				<MixtureFilter
					aroma={aroma}
				/>
				<Space>
					<AromaNameInline aroma={aroma}/>
					<AromaContentInline aroma={aroma}/>
				</Space>
			</RowInline>}
			locale={{
				emptyText: <MixtureListEmpty/>,
			}}
		/>;
};

export default withMarketLayout(function Mixture({aroma}: IAromaFetch) {
	return <MarketPage
		title={"market.aroma.mixture"}
		tabTitle={"market.aroma.mixture.title.tab"}
		values={{aroma}}
		components={TransComponents}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]/mixture"]}
		icon={<MixtureIcon/>}
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
				icon={<MixtureIcon/>}
				label={"market.aroma.mixture.label"}
			/>
		</Breadcrumbs>}
	>
		<MixtureProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				aromaId: aroma.id,
			}}
			defaultFilter={{
				nicotineToRound: 0,
			}}
			defaultSource={{
				nicotineToRound: 0,
			}}
			defaultOrderBy={[
				{vg: "desc"},
				{nicotine: "desc"},
			] as any}
		>
			<InternalList aroma={aroma}/>
		</MixtureProviderControl>
	</MarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
