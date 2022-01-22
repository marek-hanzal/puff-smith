import {CoilIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useCoilsQueryInvalidate} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {message} from "antd";

export interface ICoilTooltipProps extends Partial<IFormTooltipProps> {
}

export const CoilTooltip: FC<ICoilTooltipProps> = props => {
	const {t} = useTranslation();
	const coilsQueryInvalidate = useCoilsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<CoilIcon/>}
		label={'lab.coil'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateCoilForm
				onSuccess={({response}) => {
					message.success(t("lab.coil.create.success", {data: response}));
					coilsQueryInvalidate();
					drawerContext.setVisible(false);
					formContext.setValues({
						coilId: response.id,
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
