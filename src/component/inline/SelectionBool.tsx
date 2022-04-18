import {MinusCircleTwoTone} from "@ant-design/icons";
import {BoolInline, useOptionalSelectionContext} from "@leight-core/client";
import {FC} from "react";

export interface ISelectionBoolProps {
	selection: any;
}

export const SelectionBool: FC<ISelectionBoolProps> = ({selection}) => {
	const selectionContext = useOptionalSelectionContext();
	return selectionContext && <BoolInline bool={selectionContext.isSelectedItem(selection)} uncheckIcon={<MinusCircleTwoTone/>}/>;
};
