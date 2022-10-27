import Icon         from "@ant-design/icons";
import {
	ComponentProps,
	FC
}                   from "react";
import {GiWireCoil} from "react-icons/gi";

export const WireIcon: FC<ComponentProps<typeof Icon>> = () => <Icon component={GiWireCoil}/>;
