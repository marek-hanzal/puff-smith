import {LiquidIcon}       from "@/puff-smith/component/icon/LiquidIcon";
import {IWithLiquid}      from "@/puff-smith/service/liquid/interface";
import {nextLiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {MobileLabPage}    from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout}    from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidPatchForm}  from "@/puff-smith/ui/liquid/form/LiquidPatchForm";

export default withLabLayout(function Edit({liquid}: IWithLiquid) {
	return <MobileLabPage
		onBack={navigate => navigate("/lab/liquid/[liquidId]", {liquidId: liquid.id})}
		title={"lab.liquid.edit"}
		values={{liquid}}
		menuSelection={[
			"/lab/liquid",
			"/lab/liquid/[liquidId]"
		]}
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

export const getServerSideProps = nextLiquidSource();
