import Icon                   from "@ant-design/icons";
import {
    ComponentProps,
    FC
}                             from "react";
import {AiOutlineTranslation} from "react-icons/ai";

export const TranslationIcon: FC<ComponentProps<typeof Icon>> = () => <Icon component={AiOutlineTranslation}/>;
