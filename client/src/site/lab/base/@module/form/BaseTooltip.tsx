import {BaseIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useBasesQueryInvalidate} from "@/sdk/puff-smith/api/lab/base/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateBaseForm} from "@/puff-smith/site/lab/base";
import {message} from "antd";

export interface IBaseTooltipProps extends Partial<IFormTooltipProps> {
}

export const BaseTooltip: FC<IBaseTooltipProps> = props => {
	const {t} = useTranslation();
	const basesQueryInvalidate = useBasesQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<BaseIcon/>}
		label={'lab.base'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateBaseForm
				onSuccess={({response}) => {
					message.success(t("lab.base.create.success", {data: response}));
					basesQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							baseId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
