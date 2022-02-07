import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useLiquidsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateLiquidForm} from "@/puff-smith/site/lab/liquid";
import {message} from "antd";

export interface ILiquidTooltipProps extends Partial<IFormTooltipProps> {
}

export const LiquidTooltip: FC<ILiquidTooltipProps> = props => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		label={'lab.liquid'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateLiquidForm
				onSuccess={({response}) => {
					message.success(t("lab.liquid.create.success", {data: response}));
					liquidsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							liquidId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
