import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch} from "@/puff-smith/service/atomizer/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerIndexMenu} from "@/puff-smith/site/market/atomizer/@module/menu/AtomizerIndexMenu";
import {AtomizerCreateButton} from "@/puff-smith/site/shared/atomizer/@module/button/AtomizerCreateButton";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";

export default withMarketLayout(function Index({atomizer}: IAtomizerFetch) {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={["/market/atomizer", "/market/atomizer/[atomizerId]"]}
		icon={<AtomizerIcon/>}
		extra={<AtomizerCreateButton/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/market/atomizer"}
				label={"market.atomizer.label"}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={<AtomizerNameInline atomizer={atomizer}/>}
			/>
		</Breadcrumbs>}
		headerProps={{
			footer: <AtomizerIndexMenu atomizer={atomizer}/>
		}}
	>
		<Template>
			<AtomizerView atomizer={atomizer}/>
		</Template>
	</MarketPage>;
});

export const getServerSideProps = AtomizerSource().withFetch("atomizer", "atomizerId");
