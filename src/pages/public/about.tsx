import {BrowserPublicPage} from "@/puff-smith/site/public/component/BrowserPublicPage";
import {withPublicLayout} from "@/puff-smith/site/public/layout/layout";
import {Template} from "@leight-core/client";
import {Trans} from "react-i18next";

export default withPublicLayout(function Index() {
	return <BrowserPublicPage
		title={"public.about"}
		menuSelection={["/public/about"]}
	>
		<Template>
			<Trans i18nKey={"public.about.content"}/>
		</Template>
	</BrowserPublicPage>;
});
