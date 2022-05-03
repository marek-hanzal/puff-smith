import {BaseFilter} from "@/puff-smith/site/shared/base/@module/filter/BaseFilter";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

export interface IBaseListToolbarProps extends Partial<IButtonBarProps> {

}

export const BaseListToolbar: FC<IBaseListToolbarProps> = props => {
	return <ButtonBar {...props}>
		<BaseFilter/>
	</ButtonBar>;
};
