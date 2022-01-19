import {FullLogoIcon} from "@/puff-smith";
import {HomeOutlined} from "@ant-design/icons";
import {LoaderLayout, useNavigate} from "@leight-core/leight";
import {useEffect} from "react";
import {usePuffSmithSessionContext, withAppLayout} from "@/puff-smith/site/shared";

export default withAppLayout(function Index() {
	const navigate = useNavigate();
	const sessionContext = usePuffSmithSessionContext();
	useEffect(() => {
		setTimeout(() => {
			navigate("/" + (sessionContext?.session?.user?.site || "public"));
		}, 1500);
	}, []);
	return <LoaderLayout
		logo={<FullLogoIcon/>}
		icon={<HomeOutlined/>}
	/>;
});
