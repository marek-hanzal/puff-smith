import {PublicPage, withPublicLayout} from "@/vapers-dream/site/public";
import {HomeOutlined} from "@ant-design/icons";
import {LoaderIcon, useNavigate} from "@leight-core/leight";
import {Result} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export default withPublicLayout(function Index() {
	const {t} = useTranslation();
	const navigate = useNavigate();
	// const sessionContext =
	useEffect(() => {
		setTimeout(() => {
			// navigate("/" + sessionContext.session.site);
		}, 1500);
	}, []);
	return <PublicPage
		name={"public.site"}
		fullwidth
	>
		<Result
			icon={<HomeOutlined/>}
			title={t("public.site")}
			subTitle={<LoaderIcon/>}
		/>
	</PublicPage>;
});
