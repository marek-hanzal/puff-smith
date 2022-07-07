import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaEditForm} from "@/puff-smith/site/shared/aroma/@module/form/AromaEditForm";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, EditIcon, Template} from "@leight-core/client";

export default withMarketLayout(function Edit({aroma}: IAromaFetch) {
	return <BrowserMarketPage
		onBack={navigate => navigate("/market/aroma/[aromaId]", {aromaId: aroma.id})}
		title={"market.aroma.aroma"}
		tabTitle={"market.aroma.edit.title.tab"}
		values={{aroma}}
		components={TransComponents}
		menuSelection={["/market/aroma"]}
		icon={<EditIcon/>}
		withHelp={{
			translation: "market.aroma.edit",
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
				icon={<AromaIcon/>}
				label={"market.aroma.edit.label"}
			/>
		</Breadcrumbs>}
	>
		<Template span={14}>
			<AromaEditForm
				aroma={aroma}
				onSuccess={({response, navigate}) => {
					navigate("/market/aroma/[aromaId]", {
						aromaId: response.id,
					});
				}}
			/>
		</Template>
	</BrowserMarketPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
