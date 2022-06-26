import Logo from "@/puff-smith/assets/logo/logo.svg";
import {Image} from "antd";
import {ImageProps} from "rc-image";
import {FC} from "react";

export const LogoIcon: FC<ImageProps> = props => <Image alt={"Logo"} preview={false} src={Logo} {...props}/>;
