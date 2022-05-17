import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaFetchProps} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu, AromaIndexMenuWidth} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {MixtureList} from "@/puff-smith/site/market/mixture/@module/list/MixtureList";
import {MixtureListEmpty} from "@/puff-smith/site/market/mixture/@module/list/MixtureListEmpty";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureJobButton";
import {MixtureFilter} from "@/puff-smith/site/shared/mixture/@module/filter/MixtureFilter";
import {MixtureSourceControlProvider} from "@/sdk/api/mixture/query";
import {PushRight} from "@leight-core/client";
import {Col, Divider, Row, Space} from "antd";

export default withMarketLayout(function Index({aroma}: IAromaFetchProps) {
	return <MarketPage
		title={"market.aroma.mixture"}
		tabTitle={"market.aroma.mixture.title.tab"}
		values={{aroma}}
		components={TransComponents}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]/mixture"]}
		icon={<MixtureIcon/>}
		extra={<AromaIndexMenu aroma={aroma}/>}
		extraSize={AromaIndexMenuWidth}
	>
		<MixtureSourceControlProvider
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				aromaId: aroma.id,
			}}
			defaultOrderBy={[
				{vg: "desc"},
				{nicotine: "desc"},
			] as any}
		>
			<MixtureList
				header={() => <>
					<Row align={"middle"}>
						<Col span={12}>
							<Space split={<Divider type={"vertical"}/>}>
								<MixtureFilter
									aroma={aroma}
								/>
								<Space>
									<AromaNameInline aroma={aroma}/>
									<AromaContentInline aroma={aroma}/>
								</Space>
							</Space>
						</Col>
						<Col span={12}>
							<PushRight>
								<MixtureJobButton aroma={aroma}/>
							</PushRight>
						</Col>
					</Row>
				</>}
				locale={{
					emptyText: <MixtureListEmpty/>,
				}}
			/>
		</MixtureSourceControlProvider>
	</MarketPage>;
});

export const getServerSideProps = AromaService().pageFetch("aroma", "aromaId");
