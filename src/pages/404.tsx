import {BrowserPublicPage} from "@/puff-smith/site/public/component/BrowserPublicPage";
import {withPublicLayout}  from "@/puff-smith/site/public/layout/layout";
import {
	BackIcon,
	ButtonBar,
	ButtonLink,
	HomeIcon,
	Template
}                          from "@leight-core/viv";
import {
	Button,
	Divider
}                          from "antd";
import {useRouter}         from "next/router";
import {useTranslation}    from "react-i18next";

export default withPublicLayout(function Custom404() {
	const {t}    = useTranslation();
	const router = useRouter();
	return <BrowserPublicPage
		title={"public.404"}
	>
		<Template
			status={"404"}
			label={"public.404"}
			extra={
				<ButtonBar split={<Divider type={"vertical"}/>}>
					<Button type={"text"} icon={<BackIcon/>} onClick={() => router.back()}>{t("public.404.back")}</Button>
					<ButtonLink icon={<HomeIcon/>} href={"/"} label={"public.404.home"}/>
				</ButtonBar>
			}
		/>
	</BrowserPublicPage>;
});
