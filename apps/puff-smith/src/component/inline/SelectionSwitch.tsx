import {useOptionalSelectionContext} from "@leight-core/viv";
import {Switch}                      from "antd-mobile";
import {
	ComponentProps,
	FC
}                                    from "react";

export interface ISelectionSwitchProps extends Partial<ComponentProps<typeof Switch>> {
	selection: any;
}

export const SelectionSwitch: FC<ISelectionSwitchProps> = ({selection, ...props}) => {
	const selectionContext = useOptionalSelectionContext();
	return selectionContext && <Switch
		checked={selectionContext.isSelectedItem(selection)}
		onChange={() => selectionContext?.item(selection)}
		{...props}
	/>;
};
