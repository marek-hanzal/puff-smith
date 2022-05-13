import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaFetchProps} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {Col, Row} from "antd";

export default withMarketLayout(function Index({aroma}: IAromaFetchProps) {
	return <MarketPage
		title={"market.aroma.mixture"}
		values={{aroma}}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]/mixture"]}
		icon={<MixtureIcon/>}
		headerPostfix={<AromaIndexMenu aroma={aroma}/>}
	>
		<Row gutter={16}>
			<Col span={12}>
				mixtures, ghy
			</Col>
		</Row>
	</MarketPage>;
});

export const getServerSideProps = AromaService().pageFetch("aroma", "aromaId");
