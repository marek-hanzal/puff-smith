import Icon             from "@ant-design/icons";
import {
    ComponentProps,
    FC
}                       from "react";
import {BsClockHistory} from "react-icons/bs";

export const SteepIcon: FC<ComponentProps<typeof Icon>> = () => <Icon component={BsClockHistory}/>;
