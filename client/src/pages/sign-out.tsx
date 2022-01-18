import {LockOutlined} from "@ant-design/icons";
import {LoaderIcon, useNavigate} from "@leight-core/leight";
import {Result} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {PublicPage, withPublicLayout} from "@/puff-smith/site/public";
import {useLogoutMutation} from "@/sdk/edde/api/shared/user/endpoint";

export default withPublicLayout(function SignOut() {
	const {t} = useTranslation();
	const navigate = useNavigate();

	const logout = useLogoutMutation(undefined, {
		onSuccess: () => {
			setTimeout(() => {
				navigate("/public");
			}, 1500);
		},
	});
	useEffect(() => {
		logout.mutate(undefined);
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
