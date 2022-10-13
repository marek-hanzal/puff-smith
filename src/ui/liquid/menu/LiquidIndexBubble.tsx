import {BubbleMenu} from "@leight-core/viv";
import {FC}         from "react";

export interface ILiquidIndexBubbleProps {
}

export const LiquidIndexBubble: FC<ILiquidIndexBubbleProps> = () => {
	return <BubbleMenu
		translation={"lab.liquid"}
		actions={[
			{
				key:     "create.button",
				bold:    true,
				onClick: ({navigate}) => navigate("/lab/liquid/create"),
			},
		]}
	/>;
};
