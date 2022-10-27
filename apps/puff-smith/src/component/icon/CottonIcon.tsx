import Icon             from "@ant-design/icons";
import {
	ComponentProps,
	FC
}                       from "react";
import {FaCottonBureau} from "react-icons/fa";

export const CottonIcon: FC<ComponentProps<typeof Icon>> = () => <Icon component={FaCottonBureau}/>;
