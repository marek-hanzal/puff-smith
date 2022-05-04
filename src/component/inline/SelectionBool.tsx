import {useOptionalSelectionContext} from "@leight-core/client";
import {Checkbox} from "antd";
import {ComponentProps, FC} from "react";

export interface ISelectionBoolProps extends Partial<ComponentProps<typeof Checkbox>> {
	selection: any;
}

export const SelectionBool: FC<ISelectionBoolProps> = ({selection, ...props}) => {
	const selectionContext = useOptionalSelectionContext();
	return selectionContext && <Checkbox checked={selectionContext.isSelectedItem(selection)} {...props}/>;
};
