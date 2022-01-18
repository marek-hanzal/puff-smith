import icon from "@/puff-smith/assets/logo.svg";
import {SmileOutlined} from "@ant-design/icons";
import {ButtonLink, SignInIcon} from "@leight-core/leight";
import {Image, Result, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {PublicMenu, PublicPage, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	return <PublicPage
		name={"public.index"}
	>
		<PublicMenu/>
		<Result
			icon={<Image alt={"logo"} height={110} preview={false} src={icon}/>}
			status={"success"}
			title={t("public.home.content.title")}
			subTitle={t("public.home.content.subtitle")}
			extra={
				<ButtonLink size={"large"} href={"/public/sign-in"} icon={<SignInIcon/>} title={"public.home.sign-in.title"}/>
			}
		>
			<Typography.Paragraph>
				<Typography.Text
					strong
					style={{fontSize: 16}}
				>
					{t("public.home.content.list.title")}
				</Typography.Text>
			</Typography.Paragraph>
			<Typography.Paragraph>
				<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-0")}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-1")}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-2")}
			</Typography.Paragraph>
		</Result>
	</PublicPage>;
});
