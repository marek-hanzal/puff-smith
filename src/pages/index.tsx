import {HomeOutlined} from "@ant-design/icons";
import {LoaderLayout} from "@leight-core/common";
import {useEffect} from "react";
import {useNavigate} from "@leight-core/utils";
import {withAppLayout} from "@/puff-smith/site/shared";
import {FullLogoIcon} from "@/puff-smith";

export default withAppLayout(function Index() {
	const navigate = useNavigate();
	// const sessionContext = usePuffSmithSessionContext();
	useEffect(() => {
		setTimeout(() => {
			// navigate("/" + (sessionContext?.session?.user?.site || "public"));
		}, 1500);
	}, []);
	return <LoaderLayout
		logo={<FullLogoIcon/>}
		icon={<HomeOutlined/>}
	/>;
});
