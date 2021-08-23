import Logo from "@/ps/assets/logo/logo.svg";
import {Image} from "antd";
import {ImageProps} from "rc-image";
import {FC} from "react";

export const LogoIcon: FC<ImageProps> = props => {
	return <Image alt={"Puff Smith Logo"} preview={false} src={Logo} {...props}/>;
};
