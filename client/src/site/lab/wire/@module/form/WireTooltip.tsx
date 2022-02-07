import {FC} from "react";
import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {useWiresQueryInvalidate} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateWireForm} from "@/puff-smith/site/lab/wire";
import {message} from "antd";

export interface IWireTooltipProps extends Partial<IFormTooltipProps> {
}

export const WireTooltip: FC<IWireTooltipProps> = props => {
	const {t} = useTranslation();
	const wiresQueryInvalidate = useWiresQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		label={'lab.wire'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateWireForm
				onSuccess={({response}) => {
					message.success(t("lab.wire.create.success", {data: response}));
					wiresQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							wireId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
