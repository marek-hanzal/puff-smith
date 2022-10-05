import {BubbleMenu} from "@leight-core/client";
import {FC}         from "react";

export interface IAromaIndexBubbleProps {
}

export const AromaIndexBubble: FC<IAromaIndexBubbleProps> = () => {
	return <BubbleMenu
		translation={"market.aroma"}
		actions={[
			{
				key:     "create.button",
				bold:    true,
				onClick: ({navigate}) => navigate("/market/aroma/create"),
			},
		]}
	/>;
};
