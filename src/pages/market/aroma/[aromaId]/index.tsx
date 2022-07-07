import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/market/aroma/@module/menu/AromaIndexMenu";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaView} from "@/puff-smith/site/shared/aroma/@module/view/AromaView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonLink, EditIcon} from "@leight-core/client";

export default withMarketLayout(function Index({aroma}: IAromaFetch) {
	return <BrowserMarketPage
		onBack={navigate => navigate("/market/aroma")}
		title={"market.aroma.aroma"}
		tabTitle={"market.aroma.aroma.title.tab"}
		values={{aroma}}
		components={TransComponents}
		menuSelection={["/market/aroma", "/market/aroma/[aromaId]"]}
		icon={<AromaIcon/>}
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
		footer={<AromaIndexMenu aroma={aroma}/>}
	>
		<AromaView aroma={aroma}/>
	</BrowserMarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
