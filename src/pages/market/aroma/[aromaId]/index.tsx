import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {AromaView} from "@/puff-smith/site/market/aroma/@module/view/AromaView";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonLink, EditIcon} from "@leight-core/client";

export default withMarketLayout(function Index({aroma}: IAromaFetch) {
	return <MarketPage
		onBack={navigate => navigate("/market/aroma")}
		title={"market.aroma.aroma"}
		tabTitle={"market.aroma.aroma.title.tab"}
		values={{aroma}}
		components={TransComponents}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]"]}
		icon={<AromaIcon/>}
		headerProps={{
			footer: <AromaIndexMenu aroma={aroma}/>,
		}}
		extra={<ButtonLink
			href={"/market/aroma/[aromaId]/edit"}
			query={{aromaId: aroma.id}}
			label={"market.aroma.edit.button"}
			icon={<EditIcon/>}
		/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/market/aroma"}
				label={"market.aroma.label"}
			/>
			<BreadcrumbIcon
				icon={<AromaIcon/>}
				label={<AromaNameInline aroma={aroma}/>}
			/>
		</Breadcrumbs>}
	>
		<AromaView aroma={aroma}/>
	</MarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
