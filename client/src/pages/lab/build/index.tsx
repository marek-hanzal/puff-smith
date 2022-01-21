import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {Template} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {BuildPageMenu} from "@/puff-smith/site/lab/build";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.build"}
	>
		<LabMenu/>
		<BuildPageMenu/>
		<Template
			icon={<BuildIcon/>}
			label={'lab.build'}
		/>
	</LabPage>;
});
