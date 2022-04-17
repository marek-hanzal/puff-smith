import {ButtonBar, useOptionalDrawerContext, useOptionalFormItemContext, useOptionalSelectionContext} from "@leight-core/client";
import {Button, Divider} from "antd";
import {PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";

export interface IDrawerCancelOkProps<TSelection> {
	toValue(selection: TSelection): any;
}

export const DrawerCancelOk = <TSelection, >({toValue}: PropsWithChildren<IDrawerCancelOkProps<TSelection>>) => {
	const {t} = useTranslation();
	const drawerContext = useOptionalDrawerContext();
	const selectionContext = useOptionalSelectionContext<TSelection>();
	const formItemContext = useOptionalFormItemContext();
	return <ButtonBar split={<Divider type={"vertical"}/>} size={4}>
		<Button
			type={"link"}
			onClick={() => drawerContext?.setVisible(false)}
		>
			{t("common.selection.cancel.label")}
		</Button>
		<Button
			type={"primary"}
			disabled={selectionContext?.isEmpty()}
			onClick={() => {
				formItemContext?.setValue(toValue(selectionContext?.toSingle()));
				drawerContext?.setVisible(false);
			}}
		>
			{t("common.selection.ok.label")}
		</Button>
	</ButtonBar>;
};
