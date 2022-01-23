import {MixtureIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useMixturesQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateMixtureForm} from "@/puff-smith/site/lab/mixture";
import {message} from "antd";

export interface IMixtureTooltipProps extends Partial<IFormTooltipProps> {
}

export const MixtureTooltip: FC<IMixtureTooltipProps> = props => {
	const {t} = useTranslation();
	const mixturesQueryInvalidate = useMixturesQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<MixtureIcon/>}
		label={'lab.mixture'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateMixtureForm
				onSuccess={({response}) => {
					message.success(t("lab.mixture.create.success", {data: response}));
					mixturesQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							mixtureId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
