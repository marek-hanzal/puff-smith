import {LiquidIcon}       from "@/puff-smith/component/icon/LiquidIcon";
import {MobileLabPage}    from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout}    from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidCreateForm} from "@/puff-smith/ui/liquid/form/LiquidCreateForm";
import {useParams}        from "@leight-core/viv";

export default withLabLayout(function Create() {
	const {aromaId} = useParams();
	return <MobileLabPage
		title={"lab.liquid.create"}
		icon={<LiquidIcon/>}
		onBack={navigate => navigate("/lab/liquid")}
	>
		<LiquidCreateForm
			toForm={() => ({
				aromaId,
			})}
			onSuccess={({navigate, response}) => {
				navigate("/lab/liquid/[liquidId]", {liquidId: response.id});
			}}
		/>
	</MobileLabPage>;
});
