import {LogoIcon, useSessionContext} from "@/vapers-dream";
import {HomeOutlined} from "@ant-design/icons";
import {LoaderLayout, useNavigate} from "@leight-core/leight";
import {useEffect} from "react";

export default function Index() {
	const navigate = useNavigate();
	const sessionContext = useSessionContext();
	useEffect(() => {
		setTimeout(() => {
			navigate("/" + sessionContext.session.user.site);
		}, 1500);
	}, []);
	return <LoaderLayout
		logo={<LogoIcon/>}
		icon={<HomeOutlined/>}
		loading
		error={false}
	/>;
};
