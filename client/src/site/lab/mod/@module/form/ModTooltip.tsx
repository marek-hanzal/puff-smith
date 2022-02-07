import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useModsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateModForm} from "@/puff-smith/site/lab/mod";
import {message} from "antd";

export interface IModTooltipProps extends Partial<IFormTooltipProps> {
}

export const ModTooltip: FC<IModTooltipProps> = props => {
	const {t} = useTranslation();
	const modsQueryInvalidate = useModsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		label={'lab.mod'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateModForm
				onSuccess={({response}) => {
					message.success(t("lab.mod.create.success", {data: response}));
					modsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							modId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
