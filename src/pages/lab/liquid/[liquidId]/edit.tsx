import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {ILiquidFetch} from "@/puff-smith/service/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidPatchForm} from "@/puff-smith/ui/liquid/form/LiquidPatchForm";

export default withLabLayout(function Edit({liquid}: ILiquidFetch) {
	return <MobileLabPage
		onBack={navigate => navigate("/lab/liquid")}
		title={"lab.liquid.liquid"}
		values={{liquid}}
		menuSelection={["/lab/liquid", "/lab/liquid/[liquidId]"]}
		icon={<LiquidIcon/>}
	>
		<LiquidPatchForm
			liquid={liquid}
			onSuccess={({navigate, response}) => {
				navigate("/lab/liquid/[liquidId]", {liquidId: response.id});
			}}
		/>
	</MobileLabPage>;
});

export const getServerSideProps = LiquidSource().withFetch("liquid", "liquidId");
