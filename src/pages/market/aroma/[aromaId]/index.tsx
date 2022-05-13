import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaFetchProps} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {AromaView} from "@/puff-smith/site/market/aroma/@module/view/AromaView";
import {Col, Row} from "antd";

export default withMarketLayout(function Index({aroma}: IAromaFetchProps) {
	return <MarketPage
		title={"market.aroma.aroma"}
		values={{aroma}}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]"]}
		icon={<LiquidIcon/>}
		headerPostfix={<AromaIndexMenu aroma={aroma}/>}
	>
		<Row gutter={16}>
			<Col span={12}>
				<AromaView aroma={aroma}/>
			</Col>
		</Row>
	</MarketPage>;
});

export const getServerSideProps = AromaService().pageFetch("aroma", "aromaId");
