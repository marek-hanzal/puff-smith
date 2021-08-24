import {PublicPage, withPublicLayout} from "@/ps/site/public";
import {LockOutlined} from "@ant-design/icons";
import {LoaderIcon} from "@leight-core/leight";
import {Result} from "antd";
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import {useTranslation} from "react-i18next";

export default withPublicLayout(function SignOut() {
	const {t} = useTranslation();
	const [, , removeCookie] = useCookies();

	useEffect(() => {
		removeCookie("ticket");
		// doPublicUserLogout(discoveryContext)
		// 	.on("done", () => {
		// 		setTimeout(() => {
		// 			navigate("/public");
		// 		}, 1500);
		// 	});
	}, []);

	return <PublicPage
		name={"public.sign-out"}
		fullwidth
	>
		<Result
			icon={<LockOutlined/>}
			title={t("public.sign-out")}
			subTitle={<LoaderIcon/>}
		/>
	</PublicPage>;
});
