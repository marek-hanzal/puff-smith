import {BoosterIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useBoostersQueryInvalidate} from "@/sdk/puff-smith/api/lab/booster/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateBoosterForm} from "@/puff-smith/site/lab/booster";
import {message} from "antd";

export interface IBoosterTooltipProps extends Partial<IFormTooltipProps> {
}

export const BoosterTooltip: FC<IBoosterTooltipProps> = props => {
	const {t} = useTranslation();
	const boostersQueryInvalidate = useBoostersQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<BoosterIcon/>}
		label={'lab.booster'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateBoosterForm
				onSuccess={({response}) => {
					message.success(t("lab.booster.create.success", {data: response}));
					boostersQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							boosterId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
