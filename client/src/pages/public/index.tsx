import icon from "@/puff-smith/assets/logo/logo-full.svg";
import {BulletCard, ButtonLink, SignInIcon} from "@leight-core/leight";
import {Image} from "antd";
import {PublicMenu, PublicPage, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function Index() {
	return <PublicPage
		title={"public.index"}
	>
		<PublicMenu/>
		<BulletCard
			title={'public.home.welcome'}
			count={4}
			icon={<Image alt={"logo"} height={160} preview={false} src={icon}/>}
			extra={
				<ButtonLink size={"large"} href={"/public/sign-in"} icon={<SignInIcon/>} title={"public.home.sign-in.title"}/>
			}
		/>
	</PublicPage>;
});
