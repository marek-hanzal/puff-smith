import Logo         from "@/puff-smith/assets/logo/logo-full.svg";
import {useMobile}  from "@leight-core/client";
import {Image}      from "antd";
import {ImageProps} from "rc-image";
import {FC}         from "react";

export const FullLogoIcon: FC<ImageProps> = props => {
	const mobile = useMobile();
	return <Image alt={"Logo"} preview={false} src={Logo} style={{width: mobile("75vw", "10vw")}} {...props}/>;
};
