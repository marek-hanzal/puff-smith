import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {ILiquidFetch} from "@/puff-smith/service/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaView} from "@/puff-smith/site/shared/aroma/@module/view/AromaView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs} from "@leight-core/client";

export default withLabLayout(function Index({liquid}: ILiquidFetch) {
	return <LabPage
		onBack={navigate => navigate("/lab/build")}
		title={"lab.liquid.index"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/liquid"}
				label={"lab.liquid.label"}
			/>
			<BreadcrumbIcon
				icon={<LiquidIcon/>}
				label={<AromaNameInline aroma={liquid.mixture.aroma}/>}
			/>
		</Breadcrumbs>}
	>
		<AromaView aroma={liquid.mixture.aroma}/>
	</LabPage>;
});

export const getServerSideProps = LiquidSource().withFetch("liquid", "liquidId");
