import {LogoIcon} from "@/puff-smith";
import {HomeOutlined} from "@ant-design/icons";
import {LoaderLayout, useNavigate} from "@leight-core/leight";
import {useEffect} from "react";

export default withAppLayout(function Index() {
	const navigate = useNavigate();
	// const sessionContext = usePuffSmithSessionContext();
	useEffect(() => {
		setTimeout(() => {
			navigate("/" + sessionContext.session.user.site);
		}, 1500);
	}, []);
	return <LoaderLayout
		logo={<LogoIcon/>}
		icon={<HomeOutlined/>}
	/>;
});
