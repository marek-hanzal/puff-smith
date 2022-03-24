import {BackIcon, ButtonBar, ButtonLink, HomeIcon, Template} from "@leight-core/client";
import {Button, Divider} from "antd";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function Custom404() {
	const {t} = useTranslation();
	const router = useRouter();
	return <PublicPage
		title={"public.404"}
	>
		<Template
			status={"404"}
			label={'public.404'}
			extra={
				<ButtonBar split={<Divider type={'vertical'}/>}>
					<Button icon={<BackIcon/>} onClick={() => router.back()}>{t("public.404.back")}</Button>
					<ButtonLink size={"large"} icon={<HomeIcon/>} href={"/"} title={"public.404.home"}/>
				</ButtonBar>
			}
		/>
	</PublicPage>;
});
