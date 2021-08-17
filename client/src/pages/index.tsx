import {useSessionContext} from "@/vapers-dream";
import {HomeOutlined} from "@ant-design/icons";
import {Loader, useNavigate} from "@leight-core/leight";
import {useEffect} from "react";

export default function Index() {
	const navigate = useNavigate();
	const sessionContext = useSessionContext();
	useEffect(() => {
		setTimeout(() => {
			navigate("/" + sessionContext.session.site);
		}, 1500);
	}, []);
	return <Loader
		icon={<HomeOutlined/>}
		loading
		error={false}
	/>;
};
