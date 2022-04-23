import {useOptionalSelectionContext} from "@leight-core/client";
import {Checkbox} from "antd";
import {FC} from "react";

export interface ISelectionBoolProps {
	selection: any;
}

export const SelectionBool: FC<ISelectionBoolProps> = ({selection}) => {
	const selectionContext = useOptionalSelectionContext();
	return selectionContext && <Checkbox checked={selectionContext.isSelectedItem(selection)}/>;
};
