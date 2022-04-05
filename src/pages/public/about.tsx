import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {Template} from "@leight-core/client";
import {Trans} from "react-i18next";

export default withPublicLayout(function Index() {
	return <PublicPage
		title={"public.about"}
		menuSelection={["/public/about"]}
	>
		<Template>
			<Trans i18nKey={"public.about.content"}/>
		</Template>
	</PublicPage>;
});
