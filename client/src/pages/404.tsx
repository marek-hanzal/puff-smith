import {PublicPage, withPublicLayout} from "@/ps/site/public";
import {HomeOutlined} from "@ant-design/icons";
import {BackIcon, ButtonLink} from "@leight-core/leight";
import {Button, Divider, Result, Space} from "antd";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";

// noinspection JSUnusedGlobalSymbols
export default withPublicLayout(function Custom404() {
	const {t} = useTranslation();
	const router = useRouter();
	return <PublicPage
		name={"public.404"}
		fullwidth
	>
		<Result
			status={"404"}
			title={t("public.404.title")}
			subTitle={t("public.404.subtitle")}
			extra={
				<Space split={<Divider type={"vertical"}/>}>
					<Button icon={<BackIcon/>} onClick={() => router.back()}>{t("public.404.back")}</Button>
					<ButtonLink size={"large"} icon={<HomeOutlined/>} href={"/"} title={t("public.404.home")}/>
				</Space>
			}
		/>
	</PublicPage>;
});
