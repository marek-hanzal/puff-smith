import {Result} from "antd";
import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon} from "@/puff-smith";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.home"}
	>
		<LabMenu/>
		<Result
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			title={t("lab.home.welcome-title")}
			subTitle={t("lab.home.welcome-subtitle")}
		/>
	</LabPage>;
});
