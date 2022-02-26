import {LockOutlined} from "@ant-design/icons";
import {LoaderIcon} from "@leight-core/common";
import {Result} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "@leight-core/utils";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";

export default withPublicLayout(function SignOut() {
	const {t} = useTranslation();
	const navigate = useNavigate();

	// const logout = useLogoutMutation(undefined, {
	// 	onSuccess: () => {
	// 		setTimeout(() => {
	// 			navigate("/public");
	// 		}, 1500);
	// 	},
	// });
	useEffect(() => {
		// logout.mutate();
	}, []);

	return <PublicPage
		title={"public.sign-out"}
		fullwidth
	>
		<Result
			icon={<LockOutlined/>}
			title={t("public.sign-out")}
			subTitle={<LoaderIcon/>}
		/>
	</PublicPage>;
});
