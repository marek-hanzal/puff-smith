import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaFetchProps} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu, AromaIndexMenuWidth} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {MixtureList} from "@/puff-smith/site/market/mixture/@module/list/MixtureList";
import {MixtureJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureJobButton";
import {MixtureSourceControlProvider} from "@/sdk/api/mixture/query";
import {Template} from "@leight-core/client";
import {Divider} from "antd";

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
			applyFilter={{
				aromaId: aroma.id,
			}}
		>
			<MixtureList
				header={() => <>
					<MixtureJobButton aroma={aroma}/>
				</>}
				locale={{
					emptyText: <Template
						icon={<MixtureIcon/>}
						label={"lab.mixture.job"}
						extra={<>
							<Divider/>
							<MixtureJobButton
								aroma={aroma}
							/>
						</>}
					/>,
				}}
			/>
		</MixtureSourceControlProvider>
	</MarketPage>;
});

export const getServerSideProps = AromaService().pageFetch("aroma", "aromaId");
