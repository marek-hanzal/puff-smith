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
import {MixtureFilter} from "@/puff-smith/site/shared/mixture/@module/filter/MixtureFilter";
import {MixtureProviderControl} from "@/sdk/api/mixture/query";
import {Template, useFilterContext} from "@leight-core/client";
import {Space} from "antd";
import {FC} from "react";

interface IInternalListProps {
	aroma: IAroma;
}

const InternalList: FC<IInternalListProps> = ({aroma}) => {
	const filterContext = useFilterContext();
	return filterContext.isEmpty() ?
		<Template
			style={{marginTop: "0em"}}
			icon={<MixtureIcon/>}
			label={"market.aroma.mixture.filter"}
			span={12}
		>
			<MixtureFilter
				inline
				aroma={aroma}
			/>
		</Template> :
		<MixtureList
			header={() => <RowInline>
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

export default withMarketLayout(function Index({aroma}: IAromaFetch) {
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
	>
		<MixtureProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				aromaId: aroma.id,
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
