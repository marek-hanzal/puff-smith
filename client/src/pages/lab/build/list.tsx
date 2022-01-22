import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildPageMenu} from "@/puff-smith/site/lab/build";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.build.list"}
	>
		<LabMenu/>
		<BuildPageMenu/>
		seznam buildu
	</LabPage>;
});
