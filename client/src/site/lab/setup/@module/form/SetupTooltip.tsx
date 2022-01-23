import {SetupIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useSetupsQueryInvalidate} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateSetupForm} from "@/puff-smith/site/lab/setup";
import {message} from "antd";

export interface ISetupTooltipProps extends Partial<IFormTooltipProps> {
}

export const SetupTooltip: FC<ISetupTooltipProps> = props => {
	const {t} = useTranslation();
	const setupsQueryInvalidate = useSetupsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<SetupIcon/>}
		label={'lab.setup'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateSetupForm
				onSuccess={({response}) => {
					message.success(t("lab.setup.create.success", {data: response}));
					setupsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							setupId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
