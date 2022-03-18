import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {Template} from "@leight-core/client";
import {Trans} from "react-i18next";

export default withPublicLayout(function Index() {
	return <PublicPage
		title={"public.tos"}
		menuSelection={['/public/tos']}
	>
		<Template>
			<Trans i18nKey={'public.tos.content'}/>
		</Template>
	</PublicPage>;
});
