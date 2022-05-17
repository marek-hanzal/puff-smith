import {TransComponents} from "@/puff-smith/component/Trans";
import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaFetchProps} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu, AromaIndexMenuWidth} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {CommentOutlined, SmileOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";

export default withMarketLayout(function Index({aroma}: IAromaFetchProps) {
	return <MarketPage
		title={"market.aroma.comment"}
		tabTitle={"market.aroma.comment.title.tab"}
		values={{aroma}}
		components={TransComponents}
		onBack={navigate => navigate("/market/aroma")}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]/comment"]}
		icon={<CommentOutlined/>}
		extra={<AromaIndexMenu aroma={aroma}/>}
		extraSize={AromaIndexMenuWidth}
	>
		<Template
			icon={<SmileOutlined/>}
			title={"Not Yet!"}
			subTitle={"To be continue..."}
		/>
	</MarketPage>;
});

export const getServerSideProps = AromaService(ServiceCreate()).pageFetch("aroma", "aromaId");
