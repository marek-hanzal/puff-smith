import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useDriptipsQueryInvalidate} from "@/sdk/puff-smith/api/lab/driptip/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateDriptipForm} from "@/puff-smith/site/lab/driptip";
import {message} from "antd";

export interface IDriptipTooltipProps extends Partial<IFormTooltipProps> {
}

export const DriptipTooltip: FC<IDriptipTooltipProps> = props => {
	const {t} = useTranslation();
	const driptipsQueryInvalidate = useDriptipsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		label={'lab.driptip'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateDriptipForm
				onSuccess={({response}) => {
					message.success(t("lab.driptip.create.success", {data: response}));
					driptipsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							driptipId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
