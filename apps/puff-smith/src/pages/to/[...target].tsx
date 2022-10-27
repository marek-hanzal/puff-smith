import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {
	LoaderLayout,
	ResponsiveProvider,
	useNavigate,
	useParams
}                     from "@leight-core/viv";
import {useEffect}    from "react";

export default function Target() {
	const {target} = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(`/${Array.isArray(target) ? target.join("/") : target}`);
		}, Math.random() * 100 + 350);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <ResponsiveProvider>
		<LoaderLayout
			loading={true}
			logo={<FullLogoIcon/>}
			icon={<FullLogoIcon/>}
		/>
	</ResponsiveProvider>;
};
