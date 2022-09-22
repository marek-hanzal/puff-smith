import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LabMenu} from "@/puff-smith/site/lab/@module/menu/LabMenu";
import i18n from "i18next";

export default withLabLayout(function Index() {
	console.log("Lang", i18n.language, i18n.languages);
	return <>
		<MobileLabPage>
			{JSON.stringify([i18n.language, i18n.languages])}
			<LabMenu/>
		</MobileLabPage>
	</>;
});
