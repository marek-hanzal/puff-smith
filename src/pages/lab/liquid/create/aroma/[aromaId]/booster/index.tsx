import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";

export default withLabLayout(function Index({aroma}: IAromaFetch) {
	return <LabPage
		onBack={navigate => navigate("/lab/liquid/create/aroma/[aromaId]", {aromaId: aroma.id})}
		title={"lab.liquid.create.aroma.booster"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
	>

	</LabPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
