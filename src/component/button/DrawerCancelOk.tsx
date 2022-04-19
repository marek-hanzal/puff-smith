import {ISelection} from "@leight-core/api";
import {ButtonBar, useOptionalDrawerContext, useOptionalFormContext, useOptionalSelectionContext} from "@leight-core/client";
import {Button, Divider} from "antd";
import {PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";

export interface IDrawerCancelOkProps<TSelection> {
	toForm(selection: ISelection<TSelection>): any;
}

export const DrawerCancelOk = <TSelection, >({toForm}: PropsWithChildren<IDrawerCancelOkProps<TSelection>>) => {
	const {t} = useTranslation();
	const drawerContext = useOptionalDrawerContext();
	const selectionContext = useOptionalSelectionContext<TSelection>();
	const formContext = useOptionalFormContext();
	return selectionContext && <ButtonBar split={<Divider type={"vertical"}/>} size={4}>
		<Button
			type={"link"}
			onClick={() => drawerContext?.setVisible(false)}
		>
			{t("common.selection.cancel.label")}
		</Button>
		<Button
			type={"primary"}
			disabled={selectionContext.isEmpty()}
			onClick={() => {
				formContext?.setValues(toForm(selectionContext?.selection()));
				drawerContext?.setVisible(false);
				selectionContext?.handleSelection();
			}}
		>
			{t("common.selection.ok.label")}
		</Button>
	</ButtonBar>;
};
