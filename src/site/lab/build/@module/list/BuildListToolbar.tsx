import {BuildDeleteButton} from "@/puff-smith/site/lab/build/@module/button/BuildDeleteButton";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBuildListToolbarProps extends Partial<IButtonBarProps> {
}

export const BuildListToolbar: FC<IBuildListToolbarProps> = props => {
	return <ButtonBar size={4} {...props}>
		<BuildDeleteButton/>
	</ButtonBar>;
};
