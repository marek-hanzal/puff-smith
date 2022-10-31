import Icon                   from "@ant-design/icons";
import {
    ComponentProps,
    FC
}                             from "react";
import {RiBattery2ChargeLine} from "react-icons/ri";

export const CellIcon: FC<ComponentProps<typeof Icon>> = () => <Icon component={RiBattery2ChargeLine}/>;
