import Logo from "@/puff-smith/assets/logo/logo-full.svg";
import {Image} from "antd";
import {ImageProps} from "rc-image";
import {FC} from "react";

export const FullLogoIcon: FC<ImageProps> = props => <Image alt={"Logo"} preview={false} src={Logo} style={{width: "10vw"}} {...props}/>;
