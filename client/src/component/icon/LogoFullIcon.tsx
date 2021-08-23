import Logo from "@/ps/assets/logo/logo-full.svg";
import {Image} from "antd";
import {ImageProps} from "rc-image";
import {FC} from "react";

export const LogoFullIcon: FC<ImageProps> = props => {
	return <Image alt={"Puff Smith Logo"} width={360} preview={false} src={Logo} {...props}/>;
};
