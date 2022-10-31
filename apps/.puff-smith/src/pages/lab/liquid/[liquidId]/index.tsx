import {LiquidIcon}         from "@/puff-smith/component/icon/LiquidIcon";
import {IWithLiquid}        from "@/puff-smith/service/liquid/interface";
import {nextLiquidSource}   from "@/puff-smith/service/liquid/LiquidSource";
import {MobileLabPage}      from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout}      from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidLiquidBubble} from "@/puff-smith/ui/liquid/menu/LiquidLiquidBubble";
import {LiquidView}         from "@/puff-smith/ui/liquid/view/LiquidView";

export default withLabLayout(function Index({liquid}: IWithLiquid) {
	return <MobileLabPage
		onBack={navigate => navigate("/lab/liquid")}
		title={"lab.liquid.liquid"}
		values={{liquid}}
		menuSelection={[
			"/lab/liquid",
			"/lab/liquid/[liquidId]"
		]}
		icon={<LiquidIcon/>}
	>
		<LiquidLiquidBubble liquid={liquid}/>
		<LiquidView liquid={liquid}/>
	</MobileLabPage>;
});

export const getServerSideProps = nextLiquidSource();
