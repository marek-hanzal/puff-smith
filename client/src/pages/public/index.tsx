import {PublicMenu, PublicPage, withPublicLayout} from "@/vapers-dream/site/public";

export default withPublicLayout(function Index() {
	return <PublicPage
		name={"public.index"}
		menu={() => <PublicMenu/>}
		menuItems={["/public"]}
	>
	</PublicPage>;
});
