import Icon        from "@ant-design/icons";
import {
    ComponentProps,
    FC
}                  from "react";
import {MdBlender} from "react-icons/md";

export const MixtureIcon: FC<ComponentProps<typeof Icon>> = () => <Icon component={MdBlender}/>;
