import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LabMenu}       from "@/puff-smith/site/lab/@module/menu/LabMenu";

export default withLabLayout(function Index() {
	return <>
		<MobileLabPage>
			<LabMenu/>
		</MobileLabPage>
	</>;
});
