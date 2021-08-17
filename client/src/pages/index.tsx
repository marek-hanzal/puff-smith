import {LogoIcon} from "@/vapers-dream";
import {LoaderIcon, useNavigate} from "@leight-core/leight";
import {Result} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export default function Index() {
	const {t} = useTranslation();
	const navigate = useNavigate();
	// const sessionContext =
	useEffect(() => {
		setTimeout(() => {
			// navigate("/" + sessionContext.session.site);
		}, 1500);
	}, []);
	return <Result
		icon={<LogoIcon/>}
		title={t("public.site")}
		subTitle={<LoaderIcon/>}
	/>;
};
