import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LoaderLayout, useNavigate, useParams} from "@leight-core/client";
import {useEffect} from "react";

export default function Target() {
	const {target} = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(`/${target}`);
		}, Math.random() * 100 + 350);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <LoaderLayout
		loading={true}
		logo={<FullLogoIcon/>}
		icon={<FullLogoIcon/>}
	/>;
};
