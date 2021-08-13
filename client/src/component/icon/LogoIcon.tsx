import Logo from "@/vapers-dream/assets/logo.svg";
import {Image} from "antd";
import {ImageProps} from "rc-image";
import {FC} from "react";

export const LogoIcon: FC<ImageProps> = props => {
	return <Image alt={"Vapers Dream Logo"} preview={false} src={Logo} {...props}/>;
};
